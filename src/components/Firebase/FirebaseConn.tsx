import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD8BhyhfudQrTfwAC7o9VVqcCxeNNg2-ig",
  authDomain: "tempodeouro-c51c8.firebaseapp.com",
  projectId: "tempodeouro-c51c8",
}

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { firebaseApp }; 
export { db };
