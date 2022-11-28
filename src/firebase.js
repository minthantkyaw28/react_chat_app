import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

//Chat app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALL7n-Gh6CEUo_g9LJBK1dtIpgLQbBTPI",
  authDomain: "react-chatapp-2d74e.firebaseapp.com",
  projectId: "react-chatapp-2d74e",
  storageBucket: "react-chatapp-2d74e.appspot.com",
  messagingSenderId: "447601309606",
  appId: "1:447601309606:web:e944ec966be3863b01c167"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();