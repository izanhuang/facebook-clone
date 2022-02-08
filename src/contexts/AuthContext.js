import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../utils/firebase'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  updateProfile,
} from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function profile(displayName, photoURL) {
    return updateProfile(auth, { displayName, photoURL })
  }

  function logout() {
    return signOut(auth)
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
  }

  function updateUserEmail(emailParam) {
    return updateEmail(auth.currentUser, emailParam)
  }

  function updateUserPassword(password) {
    return updatePassword(auth.currentUser, password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //   if (user) {
      //   loadUserDetails(user, setUserDetails)
      // } else {
      //   loadUserPlaceholder(setUserDetails)
      // }
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    console.log('The user is', currentUser)
    // if (currentUser) {
    //   loadUserDetails(currentUser, setUserDetails)
    // } else {
    //   loadUserPlaceholder(setUserDetails)
    // }
  }, [currentUser])

  const value = {
    currentUser,
    signup,
    login,
    profile,
    logout,
    resetPassword,
    updateUserEmail,
    updateUserPassword,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
