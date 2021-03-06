import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from '../components/Nav'
import Login from '../components/Auth/Login'
import Profile from '../pages/Profile'
import NotFound from '../pages/NotFound'
import Signup from '../components/Auth/Signup'
import { useAuth } from '../contexts/AuthContext'
import Home from '../pages/Home'
import UpdateProfile from '../pages/UpdateProfile'
import ForgotPassword from '../components/ForgotPassword'
import { useData } from '../contexts/DataContext'
import { useTheme } from '../contexts/ThemeContext'
import {
  loadUserPlaceholder,
  loadUserDetails,
  updateUserDetails,
} from '../utils/firebaseUtils'
import PrivateRoute from '../components/PrivateRoute'

export default function AppRouter() {
  const { currentUser } = useAuth()
  const { userDetails, setUserDetails } = useData()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    if (currentUser) {
      loadUserDetails(currentUser, setUserDetails, setTheme)
    }
    // else {
    //   loadUserPlaceholder(setUserDetails)
    // }
  }, [currentUser])

  useEffect(() => {
    // console.log('Current theme', theme)
    if (userDetails.uid !== undefined) {
      updateUserDetails({ ...userDetails, theme })
    }
  }, [theme])

  return (
    <Router>
      {currentUser != null && <Nav />}
      <Routes>
        <Route
          path="/"
          element={currentUser != null ? <Home /> : <Login />}
        ></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <UpdateProfile />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path=":userName"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  )
}
