**#Google Authentication React App**
This is a simple React application that allows users to log in using their Google account via Firebase Authentication.

**🚀 Features**
🔑 Google Sign-In authentication: Users can log in using their Google account.

👤 User details displayed after login: After successful login, the user's details (name, email, and profile picture) are displayed.

🔓 Logout functionality: Users can log out of the application.

🌍 Hosted on Firebase: The app is hosted on Firebase Hosting for easy deployment and scalability.

📂 Folder Structure
Copy
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
Before you begin, ensure you have the following installed:

Node.js: Check if Node.js is installed by running node -v in your terminal.

Firebase project: Set up a Firebase project in the Firebase Console.

Firebase CLI: Install the Firebase CLI globally by running npm install -g firebase-tools.

Git: Check if Git is installed by running git --version.

📥 Installation
Clone the repository

bash
Copy
git clone <your-repo-url>
cd google-auth-app
Install dependencies

bash
Copy
npm install
Set up Firebase

Create a Firebase project at Firebase Console.

Enable Google Authentication in Authentication → Sign-in method.

Generate Firebase config and add it to src/firebaseConfig.js:

javascript
Copy
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
To run the app locally, use the following command:

bash
Copy
npm start
The app will be available at http://localhost:3000/.

☁️ Hosting on Firebase
Initialize Firebase Hosting

bash
Copy
firebase login
firebase init hosting
Choose your Firebase project.

Set build as the public directory.

Enable SPA mode.

Build and Deploy

bash
Copy
npm run build
firebase deploy --only hosting
Your app will be live on the provided Firebase Hosting URL!

🤝 Contributing
Feel free to fork the repository and contribute by submitting a pull request. Any contributions you make are greatly appreciated.

📜 License
This project is open-source and free to use under the MIT License.

🚀 Happy Coding! 🎉
