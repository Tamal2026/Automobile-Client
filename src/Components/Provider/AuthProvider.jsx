/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    onAuthStateChanged(auth,currentUser=>{
      setLoading(true);
      console.log('User in the state',currentUser);
      setUser(currentUser)
    })
  }, []);

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,loginUser =>{
        console.log('heeelo i am changed',loginUser);
        setUser(loginUser)
        setLoading(false)
    });
    return ()=>{
        unSubscribe();
    }
})

  const authInfo = { user, createUser, signIn, logOut,loading };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
