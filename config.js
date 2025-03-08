import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKyOyjRBV_PksmuqKJ0tr6_hlBPXefUl4",
  authDomain: "homework-2-50b60.firebaseapp.com",
  projectId: "homework-2-50b60",
  storageBucket: "homework-2-50b60.firebasestorage.app",
  messagingSenderId: "250858099022",
  appId: "1:250858099022:web:4de3d87ad174d148854e1f"
};

  //initialize firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const database = getFirestore(app)
  export default app