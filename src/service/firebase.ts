import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
//TODO CreateFirebase
const firebaseConfig = {
    apiKey: "AIzaSyD6UAptpuq-rRtUTohmAFUwSVrTHqx1wco",
    authDomain: "dashboard-1eeac.firebaseapp.com",
    projectId: "dashboard-1eeac",
    storageBucket: "dashboard-1eeac.appspot.com",
    messagingSenderId: "720706057816",
    appId: "1:720706057816:web:8a89297b2306f350c8fc2d",
    measurementId: "G-KKG1E2DVT5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

async function getTask(db:any) {
    const task = collection(db, 'TASKS_LIST')
    const taskCheck = await getDocs(task);
    const list = taskCheck.docs.map(doc => doc.data());
    console.log(list[0])
}


export {db, getTask};