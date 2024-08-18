import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA2s0OE_NXOwtLzv7onaUP_LfDvesRzHCw",
  authDomain: "hinduverse-e6a39.firebaseapp.com",
  databaseURL: "https://hinduverse-e6a39-default-rtdb.firebaseio.com",
  projectId: "hinduverse-e6a39",
  storageBucket: "hinduverse-e6a39.appspot.com",
  messagingSenderId: "906720395285",
  appId: "1:906720395285:web:80c772108794de27a8ce1c",
  measurementId: "G-GSNMS0VGGM"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, ref, set, auth };