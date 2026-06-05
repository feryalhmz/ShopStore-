const firebaseConfig = {
  apiKey: "AIzaSyAO-nX3Lx3f6vo4zbxfi8yJEkiRCcr6S5g",
  authDomain: "shope-bc581.firebaseapp.com",
  projectId: "shope-bc581",
  storageBucket: "shope-bc581.firebasestorage.app",
  messagingSenderId: "155889899242",
  appId: "1:155889899242:web:ede3dd91844d43f1c16993"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();