import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
 apiKey: "AIzaSyBsrU8m9dY_fmkZnCgqmsnTU7d97ExTxkI",
  authDomain: "resturant-tunaandthecrab.firebaseapp.com",
  databaseURL: "https://resturant-tunaandthecrab-default-rtdb.firebaseio.com",
  projectId: "resturant-tunaandthecrab",
  storageBucket: "resturant-tunaandthecrab.appspot.com",
  messagingSenderId: "687699954949",
  appId: "1:687699954949:web:7171cba794cc4aa4707b6c"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
