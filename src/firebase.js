import firebase from "firebase";

const firebaseConfig = {
  apiKey: "",
  authDomain: "whats-app-clone-40311.firebaseapp.com",
  databaseURL: "https://whats-app-clone-40311.firebaseio.com",
  projectId: "whats-app-clone-40311",
  storageBucket: "whats-app-clone-40311.appspot.com",
  messagingSenderId: "902480153643",
  appId: "1:902480153643:web:121e826459ba19d3056e6e",
  measurementId: "G-MZ8P2G359V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
