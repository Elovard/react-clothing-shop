import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDeendWesOkB5qo1wKEf5ubH-VUTwpsl5s",
    authDomain: "crwn-online-store.firebaseapp.com",
    projectId: "crwn-online-store",
    storageBucket: "crwn-online-store.appspot.com",
    messagingSenderId: "440718578561",
    appId: "1:440718578561:web:10a4bba388753b4113ce80",
    measurementId: "G-WYWJY4KLP4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;