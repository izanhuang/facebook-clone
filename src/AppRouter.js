import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Login from './components/Auth/Login'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Signup from './components/Auth/Signup'
import { useAuth } from './contexts/AuthContext'
import Home from './pages/Home'
import UpdateProfile from './pages/UpdateProfile'

export default function AppRouter() {
  const [loggedIn, setLoggedIn] = useState(false)
  const { currentUser } = useAuth()

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={currentUser != null ? <Home /> : <Login />}
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/update-profile" element={<UpdateProfile />}></Route>
        <Route path="/{username}" element={<Profile />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  )
}
