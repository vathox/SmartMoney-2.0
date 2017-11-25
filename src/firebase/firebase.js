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

firebase.database().ref().set({
    name: 'Adam',
    age: '23',
    location: {
        city: 'Charleston',
        country: 'United States of America'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((e) => {
    console.log(e)
});

firebase.database().ref('attributes').set({
    height: '186cm',
    weight: '77kg'
});

firebase.database().ref().update({
    name: 'Nicolas',
    age: '30',
    job: 'student'
});

// firebase.database().ref('age')
//     .remove()
//     .then(() =>{
//         console.log('data removed')
//     })
//     .catch((e) =>{
//         console.log(e)
//     });

