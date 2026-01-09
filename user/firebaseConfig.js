import {} from 'firebase/app';  
import {} from 'firebase/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyDjYamrR-iV0QT1jbeWDzNWR3V0V5HN554",
    authDomain: "swrs-ffa78.firebaseapp.com",
    projectId: "swrs-ffa78",
    storageBucket: "swrs-ffa78.firebasestorage.app",
    messagingSenderId: "1086830664478",
    appId: "1:1086830664478:web:aa3ce9ffb1068dfa90070f",
    measurementId: "G-0CNQKKWLJ1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore DB
export const db = getFirestore(app);    