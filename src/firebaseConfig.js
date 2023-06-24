import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDGE9sqA4-JIp_Dp-HMBal5eDxpDofB_ME",
    authDomain: "reader-s-club-d66a3.firebaseapp.com",
    projectId: "reader-s-club-d66a3",
    storageBucket: "reader-s-club-d66a3.appspot.com",
    messagingSenderId: "7793171251",
    appId: "1:7793171251:web:9c3d553424839a82b53c46"
};
  
initializeApp(firebaseConfig)

export const db = getFirestore()
export const auth = getAuth()