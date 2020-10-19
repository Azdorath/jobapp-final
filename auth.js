import firebase from 'firebase/app' //importing main components of firebase

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


const auth =  firebase.auth();

export default auth;