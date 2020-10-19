import firebase from 'firebase/app' //importing main components of firebase
import 'firebase/firestore' //imports firestore from firebase
import 'firebase/auth' //imports firestore from firebase

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDOKYwaWuJ2YpcG5BdAAKC8JQ5EhWzFXvM",
    authDomain: "projectraffic-7fe85.firebaseapp.com",
    databaseURL: "https://projectraffic-7fe85.firebaseio.com",
    projectId: "projectraffic-7fe85",
    storageBucket: "projectraffic-7fe85.appspot.com",
    messagingSenderId: "648550819922"
  };

firebase.initializeApp(config); //initializes firebase for front-end

const database = firebase.firestore(); //variable that holds connection to database
const auth = firebase.auth()

//database.settings({timestampsInSnapshots:true});

export {database,auth}; //exports the database