import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAS9Pq8q3CgL8u74-0Vhu4gG7Y_5SU9VGI",
    authDomain: "berryanime-43885.firebaseapp.com",
    projectId: "berryanime-43885",
    storageBucket: "berryanime-43885.firebasestorage.app",
    messagingSenderId: "517954845891",
    appId: "1:517954845891:web:87c29f6e380dab853f7676",
    measurementId: "G-XMFBFTJER9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
