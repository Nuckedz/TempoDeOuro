import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD8BhyhfudQrTfwAC7o9VVqcCxeNNg2-ig",
  authDomain: "tempodeouro-c51c8.firebaseapp.com",
  projectId: "tempodeouro-c51c8",
  storageBucket: "tempodeouro-c51c8.appspot.com",
  messagingSenderId: "293225760645",
  appId: "1:293225760645:web:724f15b2db26516881e6ec",
  measurementId: "G-7CTKVL8MPZ"
}

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { firebaseApp }; 
export { db };
