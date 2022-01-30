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
import { IoApps } from 'react-icons/io5'
import handleClickOutside from '../../utils/ClickOutsideUtil'

const AppsDropdown = () => {
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
          <IconButton appsIcon onClick={toggling}>
            <IoApps />
          </IconButton>
        </ActiveIconButton>
      ) : (
        <IconButton appsIcon onClick={toggling}>
          <IoApps />
        </IconButton>
      )}

      {isOpen && (
        <DropDownListContainer apps>
          <DropDownList>
            <DropDownHeader>Menu</DropDownHeader>
            <ListItem noMarginBottom>Item</ListItem>
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
    // </Wrapper>
  )
}
export default AppsDropdown
