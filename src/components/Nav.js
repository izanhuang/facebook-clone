import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../styles/Button'
import { useAuth } from '../contexts/AuthContext'

const Wrapper = styled.nav``

const Nav = () => {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()

  const navigate = useNavigate()

  async function handleLogout() {
    setError('')
    try {
      await logout()
      navigate('/')
    } catch (error) {
      setError('Failed to log out')
    }
  }

  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#">Marketplace</Link>
        </li>
        <li>
          <Link to="#">Groups</Link>
        </li>
        <li>
          <Link to="#">Gaming</Link>
        </li>
        <li>
          <Link to="/update-profile">
            <Button>Update Profile</Button>
          </Link>
        </li>
        <li>
          <Button
            onClick={() => {
              handleLogout()
            }}
          >
            Log out
          </Button>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Nav
