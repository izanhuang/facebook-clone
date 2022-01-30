import React, { useEffect, useState, useRef } from 'react'
import {
  DropDownContainer,
  DropDownListContainer,
  DropDownList,
  DropDownHeader,
  ListItem,
  ActiveIconButton,
} from '../../styles/DropDown'
import { IconButton } from '../../styles/Button'
import { SiMessenger } from 'react-icons/si'
import handleClickOutside from '../../utils/ClickOutsideUtil'

const MessengerDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggling = () => setIsOpen(!isOpen)
  const wrapperRef = useRef(null)

  useEffect(() => {
    if (isOpen === true) {
      document.addEventListener('mousedown', (event) => {
        handleClickOutside(event, isOpen, setIsOpen, wrapperRef)
      })
    }
  }, [isOpen])

  return (
    // <Wrapper>
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
          <DropDownList>
            <DropDownHeader>Messages</DropDownHeader>
            <ListItem noMarginBottom>Item</ListItem>
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
    // </Wrapper>
  )
}

export default MessengerDropdown
