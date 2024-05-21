// src/firebase.js
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCeEM-1sR41NgyjOHAb33J7Ls7BYC0-888",
  authDomain: "fir-react-auth-3dd99.firebaseapp.com",
  projectId: "fir-react-auth-3dd99",
  storageBucket: "fir-react-auth-3dd99.appspot.com",
  messagingSenderId: "986440524265",
  appId: "1:986440524265:web:c8a36e3ccb5d3faf8b2b78",
  measurementId: "G-2ENRLR7R9E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };


