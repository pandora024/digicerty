import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOrjQWGkb3_I5rq2ELbtAGXug5imwaqMo",
    authDomain: "log-in-digital-certificate.firebaseapp.com",
    projectId: "log-in-digital-certificate",
    storageBucket: "log-in-digital-certificate.appspot.com",
    messagingSenderId: "740027316690",
    appId: "1:740027316690:web:1be02dbf6e88afa016f00b",
    measurementId: "G-Z1LM8HKTPM"
  };
  const fire = firebase.initializeApp(firebaseConfig)


  export default fire;