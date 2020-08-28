import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAtmocVjNl0vWsqWOvL6hpI7DD32BxINYo",
        authDomain: "messenger-e69d8.firebaseapp.com",
        databaseURL: "https://messenger-e69d8.firebaseio.com",
        projectId: "messenger-e69d8",
        storageBucket: "messenger-e69d8.appspot.com",
        messagingSenderId: "149870428325",
        appId: "1:149870428325:web:972c8937e4bf4f33e4cd4c",
        measurementId: "G-7C4BR20KP4"
});
const db = firebaseApp.firestore();

export default db;
