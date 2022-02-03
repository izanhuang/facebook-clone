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
import { Users } from '../utils/data'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(Users[1])
  const [users, setUsers] = useState(Users)
  const [newPost, setNewPost] = useState({ text: '', content: [] })

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
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    console.log('The user is', currentUser)
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
    user,
    setUser,
    users,
    setUsers,
    newPost,
    setNewPost,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
