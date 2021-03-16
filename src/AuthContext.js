import React, { createContext, useContext} from 'react'
import { auth } from './firebaseConfig'
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase';
const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const currentUser = useSelector(state => state.firebase.auth)    

    function signup(email, password) { 
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }
    
    function updateEmail(email) {
        return currentUser.updateEmail(email)
 
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    const value = {
        currentUser,
        login,
        logout,
        signup,
        resetPassword,
        updateEmail,
        updatePassword
    }
    return (
        <AuthContext.Provider value={value}>
            {isLoaded(currentUser) && children}
        </AuthContext.Provider>
    )
}
// function fancyLog() {
//     console.log("%cREndered with 🥥🥑🌽", "background: purple; color: #FFF");
//     console.log(store.getState());
//   }