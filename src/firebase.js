import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyBqIeWR9k5-lLvBBdZlPNi08dqtkxjkBP4",
    authDomain: "ubuntu-store.firebaseapp.com",
    databaseURL: "https://ubuntu-store.firebaseio.com",
    projectId: "ubuntu-store",
    storageBucket: "ubuntu-store.appspot.com",
    messagingSenderId: "263557335741",
    appId: "1:263557335741:web:d179cc4e99b468fe5505d4",
    measurementId: "G-KC1308EVCN"
});

export const db = firebase.database();
export const auth = firebase.auth();