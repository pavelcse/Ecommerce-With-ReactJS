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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;