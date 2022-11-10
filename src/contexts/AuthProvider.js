import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import toast from 'react-hot-toast';

const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user,SetUser] = useState(null)
    const [loading,setLoading] = useState(true);
    //signUp
    const SignUpEmail = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //login
    const LoginEmail = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    //updateName
    const updateName = (name) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
          })
    }
    //SignOut
    const logOut = () =>{
        localStorage.removeItem('grocery-token')
        return signOut(auth)
    }
    //google login
    const handleGoogleLogin = (GoogleProvider) =>{
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }
    //OnAuthStateChange
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            SetUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    },[])
    const authInfo = {
        user,
        loading,
        SignUpEmail,
        LoginEmail,
        logOut,
        handleGoogleLogin,
        updateName,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;