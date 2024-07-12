
//Inicializacion de Firebase/Firestore
import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore'



//require("dotenv").config()


const app = firebase.initializeApp({

    apiKey: "AIzaSyBHgG4mwWSEUBLPS1p2XFtaC8GwPIv2xN8",
    authDomain: "arquidiocesishermosillo-776dd.firebaseapp.com",
    projectId: "arquidiocesishermosillo-776dd",
    storageBucket: "arquidiocesishermosillo-776dd.appspot.com",
    messagingSenderId: "767127814821",
    appId: "1:767127814821:web:6c159d62075bcd1271c34c"
  
 /*    apiKey: `${ process.env.REACT_APP_API_KEY }` ,
    authDomain: `${ process.env.REACT_APP_AUTH_DOMAIN }` ,
    projectId: `${ process.env.REACT_APP_PROJECT_ID }` ,
    storageBucket: `${ process.env.REACT_APP_STORAGE_BUCKET }` ,
    messagingSenderId: `${ process.env.REACT_APP_MESSAGING_SENDER_ID }` ,
    appId: `${ process.env.REACT_APP_APP_ID }` */
});




const db = getFirestore(app)
export default db