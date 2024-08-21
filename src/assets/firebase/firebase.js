// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBhKbyyiHhkKwDrFo1f0gos4wyZ1oh3H0A",
    authDomain: "joshuaportfolio-881d5.firebaseapp.com",
    databaseURL: "https://joshuaportfolio-881d5-default-rtdb.firebaseio.com",
    projectId: "joshuaportfolio-881d5",
    storageBucket: "joshuaportfolio-881d5.appspot.com",
    messagingSenderId: "1087541061359",
    appId: "1:1087541061359:web:2ea8522f04102027e3dd1a"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  export { database };