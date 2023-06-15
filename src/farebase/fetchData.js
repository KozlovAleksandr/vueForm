import db from "./init.js";
import { collection, addDoc } from "firebase/firestore";

async function createData(data) {
    const colRef = collection(db, "employee");
    const docRef = await addDoc(colRef, data);
    console.log(docRef.id);
}

export default createData;
