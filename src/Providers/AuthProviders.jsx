import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from './../firebase/firebase.config';
import axios from 'axios';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    const googleProvider = new GoogleAuthProvider();

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

    // Google signIn
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup( auth, googleProvider );
    }

    // Logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // update user profile
    const updateUserProfile = (name, photo) => {
     return updateProfile(auth.currentUser, {
             displayName: name, photoURL: photo
        });
    }

    // AuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log("current user", currentUser);

            // get and set token
            if(currentUser){
                axios.post('http://localhost:5000/jwt', { email: currentUser.email })
                .then(data => {
                    console.log(data.data.token);
                    localStorage.setItem('access-token', data.data.token)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }

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
        logOut,
        updateUserProfile,
        googleSignIn
    }


    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProviders;
