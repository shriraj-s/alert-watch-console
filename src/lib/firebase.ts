import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARLPIBxEh8SrZiBGToMZqwIJzmL0A-JF8",
  authDomain: "eprd-65428.firebaseapp.com",
  projectId: "eprd-65428",
  storageBucket: "eprd-65428.firebasestorage.app",
  messagingSenderId: "198387872835",
  appId: "1:198387872835:web:b74abe0b19de65d07410f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;
