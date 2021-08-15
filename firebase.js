import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAmtsuV57myVMevECLXSccjjS1va1pipW0",
    authDomain: "whatsapp-clone-5d5a9.firebaseapp.com",
    projectId: "whatsapp-clone-5d5a9",
    storageBucket: "whatsapp-clone-5d5a9.appspot.com",
    messagingSenderId: "1029639587511",
    appId: "1:1029639587511:web:e8dfeaeb5a617552af2f32",
    measurementId: "G-VKY892L01T",
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const provider1 = new firebase.auth.FacebookAuthProvider();
const provider2 = new firebase.auth.TwitterAuthProvider();

export { db, auth, provider, provider1, provider2 };
