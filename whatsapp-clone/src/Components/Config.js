// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBfrCY2qi3age7lQ1XEd2jn2rrXZJ0uLi4",
    authDomain: "whatsapp-clone-4c7eb.firebaseapp.com",
    projectId: "whatsapp-clone-4c7eb",
    storageBucket: "whatsapp-clone-4c7eb.appspot.com",
    messagingSenderId: "240392476349",
    appId: "1:240392476349:web:98a5ba9c8abf73d69d09d4",
    measurementId: "G-WLLXT0M36V"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;