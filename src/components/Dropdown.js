import React, { useEffect, useState, useRef } from 'react'
import {
  DropDownContainer,
  DropDownListContainer,
  DropDownList,
  ListItem,
  ActiveIconButton,
  ViewProfile,
} from '../styles/DropDown'
import { TiArrowSortedDown } from 'react-icons/ti'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { IconButton } from '../styles/Button'
import { Alert } from '../styles/Alert'
import { ToggleSwitch } from './ToggleSwitch'
import { Avatar } from '../styles/Avatar'
import { SecondaryText, DisplayText } from '../styles/Text'
import { Divider } from '../styles/LineBreak'
import { RiSettings5Fill } from 'react-icons/ri'
import { GoSignOut } from 'react-icons/go'

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
      // console.log('close dropdown')
      setIsOpen(false)
      document.removeEventListener('mousedown', handleClickOutside)
    }
    // document.removeEventListener('mousedown', handleClickOutside)
  }

  useEffect(() => {
    if (isOpen === true) {
      document.addEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <DropDownContainer ref={wrapperRef}>
      {isOpen ? (
        <ActiveIconButton>
          <IconButton onClick={toggling}>
            <TiArrowSortedDown className="smaller-icon" />
          </IconButton>
        </ActiveIconButton>
      ) : (
        <IconButton onClick={toggling}>
          <TiArrowSortedDown className="smaller-icon" />
        </IconButton>
      )}
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            <Link to="/insertUsername">
              <ListItem profile onClick={toggling}>
                <Avatar src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                <ViewProfile>
                  <DisplayText>Name</DisplayText>
                  <SecondaryText>See your profile</SecondaryText>
                </ViewProfile>
              </ListItem>
            </Link>
            <Divider margin8 />
            <Link to="/settings">
              <ListItem onClick={toggling} flexRow spacing>
                <IconButton small spacing>
                  <RiSettings5Fill />
                </IconButton>
                <div>Settings</div>
              </ListItem>
            </Link>
            <ListItem flexRow>
              <ToggleSwitch />
            </ListItem>
            {error && <Alert variant="danger">{error}</Alert>}
            <ListItem noMarginBottom flexRow onClick={handleLogout}>
              <IconButton small offset spacing>
                <GoSignOut />
              </IconButton>
              Log out
            </ListItem>
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}

export default Dropdown
