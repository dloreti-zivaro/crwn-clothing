import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyABZf1t1B-Rt76S5Zi4FkiAM0ANoI4dzp8",
    authDomain: "crwn-db-92274.firebaseapp.com",
    projectId: "crwn-db-92274",
    storageBucket: "crwn-db-92274.appspot.com",
    messagingSenderId: "1096461141566",
    appId: "1:1096461141566:web:9e305bcadd0c2d7384336f",
    measurementId: "G-GK06KHT13C"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
