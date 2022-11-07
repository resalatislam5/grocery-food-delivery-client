import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user,SetUser] = useState()
    const [loading,setLoading] = useState(true)
    const SignUpEmail = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile = (displayName) =>{
        return updateProfile(auth.currentUser, {
            displayName: {displayName},
          })
    }
    const logOut = () =>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            SetUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    },[])
    console.log(user)
    const authInfo = {
        user,
        loading,
        SignUpEmail,
        updateUserProfile,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;