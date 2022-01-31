import React, { useEffect, useState, useRef } from 'react'
import {
  DropDownContainer,
  DropDownListContainer,
  DropDownList,
  DropDownHeader,
  ListItem,
  ActiveIconButton,
  ColumnContainer,
} from '../../styles/DropDown'
import { IconButton } from '../../styles/Button'
import { SiMessenger } from 'react-icons/si'
import handleClickOutside from '../../utils/ClickOutsideUtil'
import { useAuth } from '../../contexts/AuthContext'
import { Avatar } from '../../styles/Avatar'
import { SecondaryText } from '../../styles/Text'

const MessengerDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggling = () => setIsOpen(!isOpen)
  const wrapperRef = useRef(null)
  const { user } = useAuth()

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
            <SiMessenger />
          </IconButton>
        </ActiveIconButton>
      ) : (
        <IconButton onClick={toggling}>
          <SiMessenger />
        </IconButton>
      )}

      {isOpen && (
        <DropDownListContainer messages>
          <DropDownList messages>
            <DropDownHeader>Messages</DropDownHeader>
            <ListItem onClick={toggling} noMarginBottom flexRow>
              <Avatar src={user.profileImg} />
              <ColumnContainer>
                <span>{user.firstName + ' ' + user.lastName}</span>
                <SecondaryText noMargin>
                  Most recent message &middot; {'1h'}
                </SecondaryText>
              </ColumnContainer>
            </ListItem>
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}

export default MessengerDropdown
