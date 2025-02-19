import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbG9qVMZJRJPEKkS1yf5XjXlRfhMUhO58",
  authDomain: "auth-d5be8.firebaseapp.com",
  projectId: "auth-d5be8",
  storageBucket: "auth-d5be8.firebasestorage.app",
  messagingSenderId: "989548014289",
  appId: "1:989548014289:web:db7303606a1a3e1eb0f3f0",
  measurementId: "G-PRN4W583VS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
