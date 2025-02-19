Google Authentication React App




This is a simple React application that allows users to log in using their Google account via Firebase Authentication.

🚀 Features

🔑 Google Sign-In authentication

👤 User details displayed after login

🔓 Logout functionality

🌍 Hosted on Firebase

📂 Folder Structure

google-auth-app/
│── src/
│   │── pages/
│   │   │── LoginPage.js
│   │   │── WelcomePage.js
│   │── firebaseConfig.js
│   │── App.js
│── public/
│── .gitignore
│── firebase.json
│── package.json
│── README.md

🛠 Prerequisites

Node.js installed (node -v to check)

Firebase project set up (Firebase Console)

Firebase CLI installed (npm install -g firebase-tools)

Git installed (git --version to check)

📥 Installation

1️⃣ Clone the repository

git clone <your-repo-url>
cd google-auth-app

2️⃣ Install dependencies

npm install

3️⃣ Set up Firebase

Create a Firebase project at Firebase Console

Enable Google Authentication in Authentication → Sign-in method

Generate Firebase config and add it to src/firebaseConfig.js:

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

🏃 Running the App

npm start

The app will run on http://localhost:3000/.

☁️ Hosting on Firebase

1️⃣ Initialize Firebase Hosting

firebase login
firebase init hosting

Choose your Firebase project

Set build as the public directory

Enable SPA mode

2️⃣ Build and Deploy

npm run build
firebase deploy --only hosting

Your app will be live on the provided Firebase Hosting URL!

🤝 Contributing

Feel free to fork and contribute by submitting a pull request.

📜 License

This project is open-source and free to use.

🚀 Happy Coding! 🎉

