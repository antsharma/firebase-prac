// import { createContext } from "react";

// const FirebaseContext = createContext(null);

// export default FirebaseContext;

import { createContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAb3lusuaNDO236IXFNE-advpQjR726x0w",
  authDomain: "youandus-f8e19.firebaseapp.com",
  projectId: "youandus-f8e19",
  storageBucket: "youandus-f8e19.appspot.com",
  messagingSenderId: "925577737678",
  appId: "1:925577737678:web:91eb29b8cb1d6ec8ca279f",
  measurementId: "G-T6LGF47HQ0"
};

firebase.initializeApp(firebaseConfig);

const FirebaseContext = createContext(firebase);

export default FirebaseContext;