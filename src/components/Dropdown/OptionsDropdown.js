import React, { useEffect, useState, useRef } from 'react'
import {
  DropDownContainer,
  DropDownListContainer,
  DropDownList,
  ListItem,
  ActiveIconButton,
  ViewProfile,
} from '../../styles/DropDown'
import { TiArrowSortedDown } from 'react-icons/ti'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { IconButton } from '../../styles/Button'
import { Alert } from '../../styles/Alert'
import { ToggleSwitch } from '../ToggleSwitch'
import { Avatar } from '../../styles/Avatar'
import { SecondaryText, DisplayText } from '../../styles/Text'
import { Divider } from '../../styles/LineBreak'
import { RiSettings5Fill } from 'react-icons/ri'
import { GoSignOut } from 'react-icons/go'
import handleClickOutside from '../../utils/ClickOutsideUtil'

const Dropdown = () => {
  const [error, setError] = useState('')
  const { logout, user } = useAuth()
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

  useEffect(() => {
    if (isOpen === true) {
      document.addEventListener('mousedown', (event) => {
        handleClickOutside(event, isOpen, setIsOpen, wrapperRef)
      })
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
            <ListItem
              viewProfile
              onClick={() => {
                toggling()
                navigate(`/${user.userName}`)
              }}
            >
              <Avatar
                src={
                  user.profileImg !== ''
                    ? user.profileImg
                    : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                }
              />
              <ViewProfile>
                <DisplayText>
                  {user.firstName + ' ' + user.lastName}
                </DisplayText>
                <SecondaryText>See your profile</SecondaryText>
              </ViewProfile>
            </ListItem>

            <Divider margin8 />
            <Link to="/settings">
              <ListItem onClick={toggling} flexRow>
                <IconButton small margin>
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
              <IconButton small logOutIcon margin>
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
