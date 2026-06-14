// Google Drive helpers — list images from a public Drive folder using an API key.
//
// Requirements:
//  - The Drive folder must be shared "Anyone with the link → Viewer".
//  - VITE_DRIVE_APIKEY must be set (Drive API enabled, referrer-restricted).

const DRIVE_FILES_ENDPOINT = "https://www.googleapis.com/drive/v3/files";

/**
 * Pull the folder ID out of any common Google Drive link shape.
 *  - https://drive.google.com/drive/folders/<ID>
 *  - https://drive.google.com/open?id=<ID>
 *  - a bare ID
 */
export function parseDriveFolderId(url = "") {
  if (!url) return null;
  const byFolder = url.match(/folders\/([a-zA-Z0-9_-]+)/);
  if (byFolder) return byFolder[1];
  const byQuery = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (byQuery) return byQuery[1];
  const trimmed = url.trim();
  if (/^[a-zA-Z0-9_-]{20,}$/.test(trimmed)) return trimmed;
  return null;
}

/** Inline-renderable image URLs for a Drive file ID. */
export function driveImageUrls(fileId) {
  return {
    thumb: `https://drive.google.com/thumbnail?id=${fileId}&sz=w600`,
    full: `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`,
  };
}

/** Raw bytes endpoint (CORS-friendly) — used to fetch a blob for download. */
export function driveDownloadUrl(fileId) {
  const apiKey = import.meta.env.VITE_DRIVE_APIKEY;
  return `${DRIVE_FILES_ENDPOINT}/${fileId}?alt=media&key=${apiKey}`;
}

/**
 * Fetch a Drive image and trigger a browser download with a custom filename.
 * @param {string} fileId
 * @param {string} filename - desired download name (extension added if missing)
 */
export async function downloadDriveImage(fileId, filename) {
  const res = await fetch(driveDownloadUrl(fileId));
  if (!res.ok) throw new Error(`Download failed (${res.status})`);
  const blob = await res.blob();

  // Pick an extension from the blob's MIME type (fall back to .png).
  const ext = (blob.type && blob.type.split("/")[1]) || "png";
  const safeName = /\.[a-z0-9]+$/i.test(filename) ? filename : `${filename}.${ext}`;

  const objectUrl = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = objectUrl;
  a.download = safeName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(objectUrl);
}

/** Slugify an event name for use in a download filename. */
export function slugifyEventName(name = "") {
  return (
    name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "event"
  );
}

/**
 * List image files inside a public Drive folder.
 * @param {string} folderUrl - the stored eventDriveLink
 * @returns {Promise<Array<{id,name,thumb,full}>>}
 */
export async function fetchDriveImages(folderUrl) {
  const folderId = parseDriveFolderId(folderUrl);
  const apiKey = import.meta.env.VITE_DRIVE_APIKEY;

  if (!folderId) {
    throw new Error("Couldn't read a Google Drive folder ID from this link.");
  }
  if (!apiKey) {
    throw new Error("Drive API key is missing (set VITE_DRIVE_APIKEY).");
  }

  const files = [];
  let pageToken = "";

  do {
    const params = new URLSearchParams({
      q: `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`,
      fields: "nextPageToken, files(id, name)",
      orderBy: "name",
      pageSize: "100",
      key: apiKey,
    });
    if (pageToken) params.set("pageToken", pageToken);

    const res = await fetch(`${DRIVE_FILES_ENDPOINT}?${params.toString()}`);
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      const msg = body?.error?.message || `Drive request failed (${res.status})`;
      throw new Error(msg);
    }

    const data = await res.json();
    files.push(...(data.files || []));
    pageToken = data.nextPageToken || "";
  } while (pageToken);

  return files.map((f) => ({ id: f.id, name: f.name, ...driveImageUrls(f.id) }));
}
