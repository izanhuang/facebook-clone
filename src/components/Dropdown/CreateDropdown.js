import React, { useEffect, useState, useRef } from 'react'
import {
  DropDownContainer,
  DropDownListContainer,
  DropDownList,
  ListItem,
  ActiveIconButton,
  DropDownHeader,
} from '../../styles/DropDown'
import { IconButton } from '../../styles/Button'
import { GrAdd } from 'react-icons/gr'
import handleClickOutside from '../../utils/ClickOutsideUtil'

const CreateDropdown = () => {
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
          <IconButton addIcon onClick={toggling}>
            <GrAdd />
          </IconButton>
        </ActiveIconButton>
      ) : (
        <IconButton addIcon onClick={toggling}>
          <GrAdd />
        </IconButton>
      )}

      {isOpen && (
        <DropDownListContainer create>
          <DropDownList>
            <DropDownHeader>Create</DropDownHeader>
            <ListItem noMarginBottom>Item</ListItem>
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
    // </Wrapper>
  )
}

export default CreateDropdown
