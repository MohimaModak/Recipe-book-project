import React, { useState } from "react";
import { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/Firebase.Config";
import { useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  const creatUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    setloading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signInUser = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setloading(true);
    return signOut(auth);
  };

  // useEffect(() => {
  //   const observer = onAuthStateChanged(auth, (currentUser) => {
  //     console.log("stay here bodygard", currentUser);
  //     setuser(currentUser);
  //     const user = currentUser.email;
  //     if (currentUser) {
  //       axios
  //         .post("https://eleveen-server-assignment.vercel.app/jwt", user, {
  //           withCredentials: true,
  //         })
  //         .then((res) => {
  //           console.log(res.data);
  //         });
  //     } else {
  //       axios
  //         .post("https://eleveen-server-assignment.vercel.app/logout", user, { withCredentials: true })
  //         .then((res) => {
  //           console.log(res.data);
  //         });
  //       console.log("cake ta valo")
  //     }

  //     setloading(false);

  //     // if (currentUser) {
  //     //   console.log("ghumabo");
  //     // } else if (currentUser === null) {
  //     //   console.log("ghumabo na");
  //     // }
  //   });
  //   return () => observer();
  // }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setuser(currentUser);
      console.log("current user", currentUser);
      setloading(false);
      // if user exists then issue a token
      if (currentUser) {
        axios
          .post("http://localhost:2000/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token response", res.data);
          });
      } else {
        axios
          .post("http://localhost:2000/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authIfo = {
    user,
    creatUser,
    signInWithGoogle,
    signInUser,
    loading,
    logOut,
  };

  return (
    <AuthContext.Provider value={authIfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
