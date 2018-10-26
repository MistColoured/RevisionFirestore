import firebase from '@firebase/app';
import '@firebase/database';
import '@firebase/auth';

const config = {
  apiKey: "AIzaSyBSehDQyXsuTum2R68gv0b1jEGlLoDDO1A",
  authDomain: "fir-569a5.firebaseapp.com",
  databaseURL: "https://fir-569a5.firebaseio.com",
  projectId: "fir-569a5",
  storageBucket: "",
  messagingSenderId: "229948046808"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;