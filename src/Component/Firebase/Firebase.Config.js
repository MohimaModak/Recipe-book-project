import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


apiKey: "AIzaSyBJjwEG03cd_FGF4woLV_UOsoWtJiF8rRY",
authDomain: "book-reciepe-project.firebaseapp.com",
projectId: "book-reciepe-project",
storageBucket: "book-reciepe-project.appspot.com",
messagingSenderId: "184213531084",
appId: "1:184213531084:web:df513818a8269c7efb9569"
