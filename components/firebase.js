import firebase from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";

const config = {
  apiKey: "AIzaSyBSehDQyXsuTum2R68gv0b1jEGlLoDDO1A",
  authDomain: "fir-569a5.firebaseapp.com",
  databaseURL: "https://fir-569a5.firebaseio.com",
  projectId: "fir-569a5",
  storageBucket: "",
  messagingSenderId: "229948046808"
};
firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp();
export default firestore;
