import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyARue5URCZXFoU22eWODOcgm31JVYPoPmk",
  authDomain: "test-637ad.firebaseapp.com",
  databaseURL: "https://test-637ad.firebaseio.com",
  projectId: "test-637ad",
  storageBucket: "",
  messagingSenderId: "210059139276"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 