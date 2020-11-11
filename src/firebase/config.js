 // Your web app's Firebase configuration
 import firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';

 var firebaseConfig = {
    apiKey: "AIzaSyCvkg_wivEU0Z-ojglug_5PwpDCdtZZVMA",
    authDomain: "sridhar-s-instagram.firebaseapp.com",
    databaseURL: "https://sridhar-s-instagram.firebaseio.com",
    projectId: "sridhar-s-instagram",
    storageBucket: "sridhar-s-instagram.appspot.com",
    messagingSenderId: "1077693049158",
    appId: "1:1077693049158:web:f244e3439ade21df469d47"
  };
  // Initialize Firebase
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };