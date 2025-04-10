import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    // Aca va el objeto que nos da Firebase:
    apiKey: "AIzaSyAiJH-FY8htReBf7N2TBnNzHmQqZusP7Fo",
    authDomain: "e-commerce-react-a51d6.firebaseapp.com",
    projectId: "e-commerce-react-a51d6",
    storageBucket: "e-commerce-react-a51d6.firebasestorage.app",
    messagingSenderId: "874122968060",
    appId: "1:874122968060:web:7b9fc2979af034ec625079"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db