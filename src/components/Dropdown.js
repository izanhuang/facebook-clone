import React, { useEffect, useState, useRef } from 'react'
import {
  DropDownContainer,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from '../styles/DropDown'
import { TiArrowSortedDown } from 'react-icons/ti'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { IconButton } from '../styles/Button'
import { Alert } from '../styles/Alert'
import { ToggleSwitch } from './ToggleSwitch'

const Dropdown = () => {
  const [error, setError] = useState('')
  const { logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const toggling = () => setIsOpen(!isOpen)
  const wrapperRef = useRef(null)

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

  function handleClickOutside(event) {
    if (
      isOpen &&
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target)
    ) {
      setIsOpen(false)
    }
    document.removeEventListener('mousedown', handleClickOutside)
  }

  useEffect(() => {
    if (isOpen === true) {
      document.addEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <DropDownContainer ref={wrapperRef}>
      <IconButton onClick={toggling}>
        <TiArrowSortedDown className="smaller-icon" />
      </IconButton>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            <Link to="/settings">
              <ListItem onClick={toggling}>Settings</ListItem>
            </Link>
            <ListItem>
              <ToggleSwitch />
            </ListItem>
            {error && <Alert variant="danger">{error}</Alert>}
            <ListItem onClick={handleLogout}>Log out</ListItem>
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}

export default Dropdown
