import * as firebase from "firebase";


//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTTEIXbO0fQKCyLMsWR6VDvgvRyeBS1Ic",
  authDomain: "apcs360-9ac59.firebaseapp.com",
  projectId: "apcs360-9ac59",
  storageBucket: "apcs360-9ac59.appspot.com",
  messagingSenderId: "830189127711",
  appId: "1:830189127711:web:82efddaa5f96beb5c8ad2a"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth();

export { auth };