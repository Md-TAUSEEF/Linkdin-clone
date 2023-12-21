import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCYKhFFhIPZ3Q9lybsk0FprZEXmdr5cFrU",
  authDomain: "linkdin-clone-4313a.firebaseapp.com",
  projectId: "linkdin-clone-4313a",
  storageBucket: "linkdin-clone-4313a.appspot.com",
  messagingSenderId: "352640520034",
  appId: "1:352640520034:web:094ea27e73ef1d1afda63b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };