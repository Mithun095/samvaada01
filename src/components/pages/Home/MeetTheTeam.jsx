import { useEffect, useRef, useState } from "react";

const ImageGridItem = ({
  className,
  src,
  alt = "Team",
  fadeDurationMs = 1000, // smoother transition
  transformDurationMs = 1200, // subtle zoom timing
}) => {
  const [visibleSrc, setVisibleSrc] = useState(src);
  const [fading, setFading] = useState(false);
  const swapTimeoutRef = useRef(null);

  useEffect(() => {
    if (src === visibleSrc) return;

    // Start smooth fade-out + zoom
    setFading(true);
    clearTimeout(swapTimeoutRef.current);

    // Just before fade completes, preload next image and swap
    const nextImg = new Image();
    nextImg.src = src;

    swapTimeoutRef.current = setTimeout(() => {
      setVisibleSrc(src);
      setFading(false);
    }, fadeDurationMs * 0.8); // swap slightly before fade ends for smoothness

    return () => clearTimeout(swapTimeoutRef.current);
  }, [src, visibleSrc, fadeDurationMs]);

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    userSelect: "none",
    pointerEvents: "none",
    transition: `opacity ${fadeDurationMs}ms ease-in-out, transform ${transformDurationMs}ms ease-in-out`,
    opacity: fading ? 0 : 1,
    transform: fading ? "scale(1.05)" : "scale(1)",
    willChange: "opacity, transform",
  };

  return (
    <div
      className={`${className} bg-[#232323] rounded-lg overflow-hidden flex items-center justify-center`}
    >
      <img src={visibleSrc} alt={alt} draggable="false" loading="eager" style={imgStyle} />
    </div>
  );
};

// ------------------ GALLERY -------------------

const MeetTheTeam = () => {
  const allImages = [
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXqQs4Zd5EetbCxrHgMTRofDqJ0i5umynQVXOL",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXHy4JH5vjRBaFQcwTSbCPJr956qdtXV87pzuo",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXVuERPn3xbgfF3Xud9NIkqnLD8Cs7ZoRj62MW",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXpiuiS3mDHWJmSIVo6yeCPw4GMBNZlrX2j1hn",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXjlypC2Tqf53PeZK1VitXxaRHrQmFOYlEnBJ8",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXdmquBVrGSaoICXRWQpjwN6uUzA0MkmtL9q18",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXkAPPlcgMQMWlVLnim6GOzKNaYkdD7FU9I5p4",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXTNSFJ3e14OjmaBCx2MVWkz0DJ8FdUty5iTKw",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YX5SCG69zmoIJvrUzu49WheiK6E8YZRlxXjw3P",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXrwNpFr7tcQ4hBHw2vjdVaGJAixZYPR7ICLys",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXQPBp45kTeqEGVCSlJkn0RPaO4DIZ3Uoigtjb",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXDxcAUDsaCeAENJg2a68dyV0TbBj79sZ4pUxP",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YX2NOyWULGOWqPiAQeKCzlm3N6auvcyk9jRnfJ",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YX6a4SApuj0DkoSdYcQMtyU13wRApNWu8mv7zV",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXodGke84V78YXxtauKWrSDpPEqTfIn05dFGwg",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXrbDsmop7tcQ4hBHw2vjdVaGJAixZYPR7ICLy",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXNXGw69o4WqgS78HnKklFzZT23eviLY59QhBV",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXnLLcgLqMYu2D4ZGWOrPb3lNi6CU5otL8Aeax",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXNCLw2Wo4WqgS78HnKklFzZT23eviLY59QhBV",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXBmxhAnQTF05a4mbZRKfeqXWLDBNvVAY6zCOQ",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXDvYjhkaCeAENJg2a68dyV0TbBj79sZ4pUxPI",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXxKkKACWhJ9u60kHDRj1QYznP4UE8rpBaMFZc",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXzU83UBdAFXUCg7zkcR93G0K6LEPobx8jrTWB",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXR9udItJcao70yfUQYEdnHecXxiNhtvJq98Tg",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXWfpr8tRztkMe560bRSpAmUQKYVO21ysdDB3G",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXhQsuUC9oQq6zePMuTy4JwrtXRVL2ghZ7kBCj",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXU50PdlVgXKoVSryFCeO6Yns9JcuGNv4wpiHq",
  ];

  const numSlots = 7;
  const TICK_MS = 3000;

  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const [preloaded, setPreloaded] = useState(false);
  const preloadErrorRef = useRef(false);
  const [visibleIndices, setVisibleIndices] = useState(() =>
    Array.from({ length: numSlots }, (_, i) => i % allImages.length)
  );

  const queueRef = useRef(
    shuffle(Array.from({ length: allImages.length }, (_, i) => i)).filter(
      (idx) => !visibleIndices.includes(idx)
    )
  );
  const replacePosRef = useRef(0);

  useEffect(() => {
    let canceled = false;
    const promises = allImages.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(true);
          img.onerror = () => {
            preloadErrorRef.current = true;
            resolve(false);
          };
          setTimeout(() => resolve(false), 5000);
        })
    );
    Promise.all(promises).then(() => !canceled && setPreloaded(true));
    return () => (canceled = true);
  }, [allImages]);

  useEffect(() => {
    if (!preloaded) return;
    const interval = setInterval(() => {
      setVisibleIndices((curr) => {
        let nextIdx = queueRef.current.shift();
        if (nextIdx === undefined) {
          const allIdx = Array.from({ length: allImages.length }, (_, i) => i);
          const refill = shuffle(allIdx.filter((i) => !curr.includes(i)));
          queueRef.current = refill.length > 0 ? refill : shuffle(allIdx);
          nextIdx = queueRef.current.shift();
        }
        const replacePos = replacePosRef.current % numSlots;
        const nextVisible = curr.slice();
        nextVisible[replacePos] = nextIdx;
        replacePosRef.current = (replacePosRef.current + 1) % numSlots;
        return nextVisible;
      });
    }, TICK_MS);
    return () => clearInterval(interval);
  }, [preloaded]);

  const visible = visibleIndices.map((i) => allImages[i % allImages.length]);

  return (
    <div className="w-full flex flex-col mt-8 mb-4 px-2 md:px-8 h-[80vh] md:h-[80vh]">
      <h3 className="text-center text-gray-400 text-xl font-light mb-4 tracking-wide py-6">
        Photo Gallery
      </h3>

      {!preloaded && (
        <div className="text-center text-sm text-gray-400 mb-2">
          Loading images...
          {preloadErrorRef.current ? " (some images failed to load)" : ""}
        </div>
      )}

      <div className="flex-1 grid grid-cols-2 grid-rows-8 gap-2 md:grid-cols-6 md:grid-rows-4 md:gap-4 h-full mx-2 md:mx-8">
        <ImageGridItem className="col-span-2 row-span-2 md:col-span-3 md:row-span-2" src={visible[0]} />
        <ImageGridItem className="col-span-1 row-span-1 md:col-span-2 md:row-span-1" src={visible[1]} />
        <ImageGridItem className="col-span-1 row-span-1 md:col-span-1 md:row-span-1" src={visible[2]} />
        <ImageGridItem className="col-span-2 row-span-1 md:col-start-4 md:col-span-3 md:row-start-2 md:row-span-1" src={visible[3]} />
        <ImageGridItem className="col-span-1 row-span-2 md:col-span-2 md:row-span-2" src={visible[4]} />
        <ImageGridItem className="col-span-1 row-span-1 md:col-span-2 md:row-span-1" src={visible[5]} />
        <ImageGridItem className="col-span-2 row-span-1 md:col-span-2 md:row-span-1" src={visible[6]} />

        <div className="col-span-2 row-span-1 flex items-center justify-center md:col-start-3 md:col-span-4 md:row-start-4 md:row-span-1">
          <span
            className="text-[#B7CCE0] text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-center w-full px-1"
            style={{
              fontFamily: "'Poppins', 'Segoe UI', 'Arial', sans-serif",
              letterSpacing: "0.3em",
              textShadow: "0 0 30px rgba(255,255,255,0.2)",
            }}
          >
            SMC FOR A REASON
          </span>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
