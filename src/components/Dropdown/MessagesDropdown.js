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
import { useData } from '../../contexts/DataContext'
import { Avatar } from '../../styles/Avatar'
import { SecondaryText } from '../../styles/Text'

const MessengerDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggling = () => setIsOpen(!isOpen)
  const wrapperRef = useRef(null)
  const { userDetails } = useData()

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
              <Avatar src={userDetails.profileImg} />
              <ColumnContainer>
                <span>
                  {userDetails.firstName + ' ' + userDetails.lastName}
                </span>
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
