import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const analytics = getAnalytics(app);