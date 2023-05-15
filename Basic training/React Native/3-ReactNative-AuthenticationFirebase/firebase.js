// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgJrKsmZJJn6jaHJddaavYyaxoTNG7bn4",
  authDomain: "bear-fitness-gym.firebaseapp.com",
  projectId: "bear-fitness-gym",
  storageBucket: "bear-fitness-gym.appspot.com",
  messagingSenderId: "583423787891",
  appId: "1:583423787891:web:9501fba7f86a8e56f13b06"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };
