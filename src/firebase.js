import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAR7iNlfnk23yA9KLfL5kN24_DBwOC20kQ",
  authDomain: "react-admin-f3791.firebaseapp.com",
  projectId: "react-admin-f3791",
  storageBucket: "react-admin-f3791.appspot.com",
  messagingSenderId: "942641315597",
  appId: "1:942641315597:web:cd9541a3a4094621cfba44",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
