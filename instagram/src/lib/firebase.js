// import { seedDatabase } from "../seed";
const config = {
    apiKey: "AIzaSyAYPiyfzR7HJZYPcTjuofD1g3ya8mOjuvA",
    authDomain: "instagram-clone-1c501.firebaseapp.com",
    projectId: "instagram-clone-1c501",
    storageBucket: "instagram-clone-1c501.appspot.com",
    messagingSenderId: "364454721569",
    appId: "1:364454721569:web:84747bf43fda06dadb4b60"
};
const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
