// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjohCj972fQB6RedQnQdA10u2u4AHi8-4",
  authDomain: "automobile-web.firebaseapp.com",
  projectId: "automobile-web",
  storageBucket: "automobile-web.appspot.com",
  messagingSenderId: "800736592266",
  appId: "1:800736592266:web:59ba2b78b107e90bbac873"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;