
// Import the functions you need from the SDKs you need
// import firebase from "@firebase";
// import * as firebase from "firebase";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "chordzz.firebaseapp.com",
  projectId: "chordzz",
  storageBucket: "chordzz.appspot.com",
  messagingSenderId: "",
  appId: "",
  measurementId: "G-206W4XGBLS"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// firebase.initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

// export default firebase;
const signInWithEmailAndPassword = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password).then((_)=> {
        if(firebase.auth().currentUser != null){
window.location.href='/newjam'
        }
      });
      
      
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const registerWithEmailAndPassword = async ( email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password).then((_)=> {
        if(firebase.auth().currentUser != null){
window.location.href='/newjam'
        }
      });
      // const user = res.user;
      // await db.collection("users").add({
      //   uid: user.uid,
      //   name,
      //   authProvider: "local",
      //   email,
      // });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


  const logout = () => {
    auth.signOut().then(alert("logged out yay"));
  };

  export {
    auth,
    db,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
  };