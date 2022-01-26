import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from '../components/Nav'
import Login from '../components/Auth/Login'
import Profile from '../pages/Profile'
import NotFound from '../pages/NotFound'
import Signup from '../components/Auth/Signup'
import { useAuth } from '../contexts/AuthContext'
import Home from '../pages/Home'
import UpdateProfile from '../pages/UpdateProfile'
import { MainWrapper } from '../styles/Wrapper'

export default function AppRouter() {
  const { currentUser } = useAuth()

  return (
    <Router>
      {currentUser != null && <Nav />}
      <Routes>
        <Route
          path="/"
          element={currentUser != null ? <Home /> : <Login />}
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/settings" element={<UpdateProfile />}></Route>
        <Route path="/{username}" element={<Profile />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  )
}
