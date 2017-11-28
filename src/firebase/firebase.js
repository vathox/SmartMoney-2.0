import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBwPlR6y-42raoblvFJtrkJ0yRXSwXOebo",
    authDomain: "smartmoney2-e4eb1.firebaseapp.com",
    databaseURL: "https://smartmoney2-e4eb1.firebaseio.com",
    projectId: "smartmoney2-e4eb1",
    storageBucket: "smartmoney2-e4eb1.appspot.com",
    messagingSenderId: "434654970601"
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default}
