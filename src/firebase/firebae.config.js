// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq0RBCP873UeB-rmP091d4MOQfg2WLdyQ",
  authDomain: "todo-task-c16a8.firebaseapp.com",
  projectId: "todo-task-c16a8",
  storageBucket: "todo-task-c16a8.appspot.com",
  messagingSenderId: "942089217791",
  appId: "1:942089217791:web:4772908853b1b619d54eca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;