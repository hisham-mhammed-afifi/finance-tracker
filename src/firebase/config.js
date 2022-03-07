import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnQQO5_2eBLvNFk1xYzF9wk6b6VlHiH0E",
  authDomain: "mymoney-15139.firebaseapp.com",
  projectId: "mymoney-15139",
  storageBucket: "mymoney-15139.appspot.com",
  messagingSenderId: "436464189696",
  appId: "1:436464189696:web:93a033835bf37a9f3373e5",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
