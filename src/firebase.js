import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
        apiKey: "AIzaSyAYq1BdIzuIIKyh213LeOexs3RTaL3G9Tc",
        authDomain: "facebook-messanger-8e78a.firebaseapp.com",
        projectId: "facebook-messanger-8e78a",
        storageBucket: "facebook-messanger-8e78a.appspot.com",
        messagingSenderId: "556614189870",
        appId: "1:556614189870:web:84acdc45fc77b1a59a30bf"
});

const db = firebaseapp.firestore();

export default db;