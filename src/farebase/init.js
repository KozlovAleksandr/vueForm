import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDmbuC_Vhcke-jJlrCgEJn-lfwACFnrJN4",
    authDomain: "vue-form-ak.firebaseapp.com",
    databaseURL: "https://vue-form-ak-default-rtdb.firebaseio.com",
    projectId: "vue-form-ak",
    storageBucket: "vue-form-ak.appspot.com",
    messagingSenderId: "693326462606",
    appId: "1:693326462606:web:104e687010588cfb5e93df",
    measurementId: "G-YZWGS8RLQ4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db
