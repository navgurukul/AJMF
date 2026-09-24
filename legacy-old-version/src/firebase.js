import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAjswC4R_wNsgLvLyL9W1ps0LKAB0pd_N0",
  authDomain: "ajmf-dce62.firebaseapp.com",
  projectId: "ajmf-dce62",
  storageBucket: "ajmf-dce62.firebasestorage.app",
  messagingSenderId: "57811733567",
  appId: "1:57811733567:web:007e1be229514bf4a8bc8a",
  measurementId: "G-KN30CZ86NT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics helper (Analytics works only in browser environment)
let analytics = null;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
}).catch((err) => {
  console.warn("Firebase Analytics is not supported in this environment:", err);
});

export { app, analytics };
