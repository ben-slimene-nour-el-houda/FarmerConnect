import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBOu3SluP6IWLU8FmVI7-WdPOwokpFHDRE",
    authDomain: "wie-act.firebaseapp.com",
    projectId: "wie-act",
    storageBucket: "wie-act.firebasestorage.app",
    messagingSenderId: "99125947461",
    appId: "1:99125947461:web:96167805327e6a2a78472c",
    measurementId: "G-Q54B9E9KDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
