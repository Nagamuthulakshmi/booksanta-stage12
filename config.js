import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyClMGJvLR8YBt2FlLASWzrfgyHtCeO03mQ",
  authDomain: "santa-db347.firebaseapp.com",
  databaseURL: "https://santa-db347.firebaseio.com",
  projectId: "santa-db347",
  storageBucket: "gs://santa-db347.appspot.com",
  messagingSenderId: "747062904330",
  appId: "1:747062904330:web:043041e50549459d3c41f3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();