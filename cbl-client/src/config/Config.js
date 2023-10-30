import * as firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5sUBdorBKKrvtL5UjDJmdswIcSkt1k4Q",
    authDomain: "codebyte-546c6.firebaseapp.com",
    databaseURL: "https://codebyte-546c6-default-rtdb.firebaseio.com",
    projectId: "codebyte-546c6",
    storageBucket: "codebyte-546c6.appspot.com",
    messagingSenderId: "1024299629657",
    appId: "1:1024299629657:web:e24bebfeb9c83f00a90548",
    measurementId: "G-5JM01Q6QCN"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const database = firebase.firestore();
  const storage = firebase.storage();

  export { auth, database, storage };