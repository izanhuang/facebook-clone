import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Login from './components/Auth/Login'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Signup from './components/Auth/Signup'
import { Footer } from './components/Footer'

export default function AppRouter() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}>
          {/* If logged in, show Home component */}
        </Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/{username}" element={<Profile />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  )
}
