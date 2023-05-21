import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    // create user
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // user signin
    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
// user sign in by google
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

// signout
    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }
// update user profile
    const updateUserData = (user,name,photo) =>{
        return updateProfile(user, {
            displayName:name,
            photoURL:photo
        })
        
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            //console.log("logged in user inside auth state");
            setUser(loggedUser);
            setLoading(false)
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        googleSignIn,
        signOutUser,
        updateUserData,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;