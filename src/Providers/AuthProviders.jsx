import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from './../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    // SignUp
    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };
    
    // Login
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password )
    };

    // Logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // AuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("current user", currentUser);
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        };       
    }, []);

    

    const authInfo = {
        user,
        loading,
        creatUser,
        signIn,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProviders;
