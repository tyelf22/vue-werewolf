import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "api-key",
    authDomain: "werewolf-app-3780.firebaseapp.com",
    databaseURL: "https://werewolf-app-3780.firebaseio.com",
    projectId: "werewolf-app-3780",
    storageBucket: "project-id.appspot.com",
    messagingSenderId: "sender-id",
    appId: "app-id",
    measurementId: "G-measurement-id",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
// firestore.settings({ timestampsInSnapshots: true });

export default firestore;