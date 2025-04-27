import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAMjOEs3T6UjsTKJQ5C7jVu3MQeLfp9jWI",
  authDomain: "web-b691c.firebaseapp.com",
  projectId: "web-b691c",
  storageBucket: "web-b691c.firebasestorage.app",
  messagingSenderId: "846532669892",
  appId: "1:846532669892:web:5fb29250bb2a6854d33491",
  measurementId: "G-891DX9G11B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();


const loginWithPopup = () => {
  return signInWithPopup(auth, provider);
}



export {loginWithPopup};