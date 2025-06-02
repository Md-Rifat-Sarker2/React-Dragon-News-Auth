// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrkh_Ly8Nh_lmQ1ufz5vQUhUjYtGiHwTU",
  authDomain: "react-dragon-news-auth-c011b.firebaseapp.com",
  projectId: "react-dragon-news-auth-c011b",
  storageBucket: "react-dragon-news-auth-c011b.firebasestorage.app",
  messagingSenderId: "1034755912702",
  appId: "1:1034755912702:web:58f79329dd4df844d186af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;