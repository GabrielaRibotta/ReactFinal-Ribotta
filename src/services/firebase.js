// Modules
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB_lir4ERUm-qTqZ8Hp-dkkmvE8i5PPZrU",
    authDomain: "chreact-tienda.firebaseapp.com",
    projectId: "chreact-tienda",
    storageBucket: "chreact-tienda.appspot.com",
    messagingSenderId: "993902599494",
    appId: "1:993902599494:web:3c190744950deecb991947"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)