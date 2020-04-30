import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyARh9XefhwrfgtPtTrNCE8TvIxuQTeOwv4",
    authDomain: "pavel-crwn-clothing.firebaseapp.com",
    databaseURL: "https://pavel-crwn-clothing.firebaseio.com",
    projectId: "pavel-crwn-clothing",
    storageBucket: "pavel-crwn-clothing.appspot.com",
    messagingSenderId: "408327637116",
    appId: "1:408327637116:web:630ec149cb291ef286e1f9",
    measurementId: "G-YYHP4FFCE4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;