 // Initialize Firebase
 var config = {
     apiKey: "AIzaSyBrD1Ciafioq5x2b2XIICiAA8y7OgwZmEY",
     authDomain: "first-firebase-86ed6.firebaseapp.com",
     databaseURL: "https://first-firebase-86ed6.firebaseio.com",
     projectId: "first-firebase-86ed6",
     storageBucket: "first-firebase-86ed6.appspot.com",
     messagingSenderId: "721165080208"
 };
 firebase.initializeApp(config);

 var database = firebase.database();
 var currentTime = moment();
