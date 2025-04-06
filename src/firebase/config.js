import { firebase } from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCJSPKh0Dc9UoKFlwkx3npx-br_twAyN8Q",
    authDomain: "vue-blog-8aaa3.firebaseapp.com",
    projectId: "vue-blog-8aaa3",
    storageBucket: "vue-blog-8aaa3.firebasestorage.app",
    messagingSenderId: "383143178903",
    appId: "1:383143178903:web:d1f9a2257405f227356fd2"
};
  
// init firebase
firebase.initializeApp(firebaseConfig)

// database setup
let db = firebase.firestore();

export { db };