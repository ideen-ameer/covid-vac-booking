// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDULBmZboROZ-WNmi0sOC8aRq610I5J6rU",
  authDomain: "covid-vac-f0835.firebaseapp.com",
  projectId: "covid-vac-f0835",
  storageBucket: "covid-vac-f0835.appspot.com",
  messagingSenderId: "705449625906",
  appId: "1:705449625906:web:8b1db7db3d00c4119cef2b",
  measurementId: "G-QPP76D7F9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// Initialize Firebase 
//const fire = initializeApp(firebaseConfig);

export const auth = getAuth(app); 
