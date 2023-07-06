import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../components/firebase/firebase.init";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // for check if user is login or not ?
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user is => ', currentUser);
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    // for create user with email and password 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // for sign in user with email and password 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // for logOut 
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // for update user profile 
    const updateUserProfile = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
        })
    }

    // for all function use in firebase 
    const authInfo = {
        user, loading, createUser, signIn, logOut, updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;