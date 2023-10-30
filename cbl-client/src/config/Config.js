import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const Firebase_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: Firebase_API_KEY,
  authDomain: "codebyte-546c6.firebaseapp.com",
  databaseURL: "https://codebyte-546c6-default-rtdb.firebaseio.com",
  projectId: "codebyte-546c6",
  storageBucket: "codebyte-546c6.appspot.com",
  messagingSenderId: "1024299629657",
  appId: "1:1024299629657:web:e24bebfeb9c83f00a90548",
  measurementId: "G-5JM01Q6QCN"
};

const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const database = getFirestore(app);
const storage = getStorage(app);

export { database, storage };
