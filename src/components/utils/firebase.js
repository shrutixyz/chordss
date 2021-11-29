
// Import the functions you need from the SDKs you need
// import firebase from "@firebase";
// import * as firebase from "firebase";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// firebase.initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
var storage = firebase.storage();
// export default storage;

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
      // const user = res.currentUser;
      await db.collection("users").doc(email).set({
        email: email,
        // pfp: url
      }).then((_)=>{
        console.log("ho gaya")
      });
    //   if(image == null)
    //   return;
    // storage.ref(`/images/${image.name}`).put(image)
    // .on("state_changed" , alert("success") , alert);
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
    storage,
    
  };

  // export const newSesh = newSesh 

  