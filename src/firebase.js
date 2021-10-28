import { initializeApp } from 'firebase/app'
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBcJEsBTvceBwivL86tYxBDIr83rGR7dZY",
    authDomain: "vkumovie.firebaseapp.com",
    projectId: "vkumovie",
    storageBucket: "vkumovie.appspot.com",
    messagingSenderId: "255530678021",
    appId: "1:255530678021:web:2dc5c429c67a02ab56e96c",
    measurementId: "G-0TQYGMBV23"
  };
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export default storage;


