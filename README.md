# Samvaada

Welcome to the official repository for **Samvaada**, the Social Media Club of NMAMIT.  
This website is designed for tech event management, featuring event details, Google authentication, and a modern UI.

---

## 🌐 [Live Website](https://samvaada-nmamit.web.app/)

---

## 🚀 Features

- **Google Sign-In:** Secure authentication using Google accounts.
- **Home Page:** Includes a banner, welcome section, event list, and footer.
- **Event List:** Displays events with details.
- **Event Details:** Private route—only accessible to logged-in users.
- **Admin Controls:** Admin can update or delete events.
- **Responsive Design:** Works seamlessly on all devices.

---

## 🛠️ Tech Stack

- **React** – Front-end library
- **Tailwind CSS** & **Material Tailwind** – Styling and UI components
- **Firebase** – Authentication and Firestore database
- **Vite** – Fast development and build tool
- **AOS (Animate on Scroll)** – Scroll animations
- **React Toastify** – Toast notifications

---

## 📁 Project Structure

```
src/
  components/
    pages/         # Main pages (Home, EventDetails, etc.)
    shared/        # Shared components (Navbar, Footer, etc.)
  Router/
    routes/        # Route configurations (including private routes)
```

---

## 🔑 Authentication

- Users sign up and log in with Google.
- Firebase Authentication ensures secure login.
- Private routes restrict access to event details for unauthenticated users.

---

## 🗂️ Data Handling

- **Events:** Loaded from Firestore for easy updates.
- **Firestore Integration:** Uses `getDoc` and `addDoc` for event management.

---

## ⚡ Quick Start

1. **Clone the repo:**  
   `git clone https://github.com/your-username/samvaada.git`

2. **Install dependencies:**  
   `npm install`

3. **Set up Firebase:**  
   - Add your Firebase config to a `.env` file (see below).

4. **Run locally:**  
   `npm run dev`

---

## 📦 Deployment & Hosting

- The site is deployed on **Firebase Hosting**, which provides fast, secure, and reliable static site hosting with automatic SSL.
- To build for production:  
  `npm run build`
- To deploy, use:  
  `firebase deploy`

**Firebase Hosting** ensures your site is served over HTTPS, scales automatically to handle large numbers of users, and offers global CDN for low-latency access.

---

## 🔐 Security & Scalability

- **Authentication:** All sensitive operations (like event management) are protected using Firebase Authentication. Only authorized users (admins) can update or delete events.
- **Data Security:** User data and event details are stored in **Firebase Firestore**, which provides robust security rules and real-time updates.
- **Environment Variables:** Sensitive keys and configuration are stored in a `.env` file, which is **never committed to version control**. This keeps your credentials safe.
- **Scalability:**  
  - **Firebase Hosting** and **Firestore** are designed to scale automatically, so your site can handle a large number of concurrent users without performance issues.
  - Google’s infrastructure ensures high availability and reliability for both static content and real-time database operations.

---

**In summary:**  
Your project is secure and scalable thanks to Firebase’s authentication, database, and hosting services. It can easily handle high traffic and keeps user data protected.

---

## 📜 License

This project is for educational and club use at NMAMIT.

---

## 🔐 Environment Variables (`.env`)

This project uses a `.env` file to securely store sensitive configuration values such as Firebase credentials and the admin email.  
**Do not share your actual keys publicly.**  
A sample `.env` file might look like:

```
VITE_ADMIN_EMAIL=your-admin-email@domain.com
VITE_APIKEY=your-firebase-api-key
VITE_AUTHDOMAIN=your-firebase-auth-domain
VITE_PROJECTID=your-firebase-project-id
VITE_STORAGEBUCKET=your-firebase-storage-bucket
VITE_MESSAGINGSENDERID=your-firebase-messaging-sender-id
VITE_APPID=your-firebase-app-id
VITE_MEASUREMENTID=your-firebase-measurement-id
```

- These variables are required for Firebase authentication, Firestore database, and admin controls.
- **Never commit your real `.env` file to version control.**  
  Instead, add `.env` to your `.gitignore` and share a `.env.example` file for collaborators.

If you are setting up the project, copy `.env.example` to `.env` and fill in your own Firebase project details.

---

**Made with ♥ by Samvaada**

