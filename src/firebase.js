import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgJSp9gW47UhT6RmFzPG9AqIRCFv8RcN0",
  authDomain: "facebook-clone-e3631.firebaseapp.com",
  projectId: "facebook-clone-e3631",
  storageBucket: "facebook-clone-e3631.appspot.com",
  messagingSenderId: "823044840867",
  appId: "1:823044840867:web:2bc16a0b251fe087064e16",
  measurementId: "G-X501LB33HW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;