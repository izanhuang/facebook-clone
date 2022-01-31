import React, { useEffect, useState, useRef } from 'react'
import {
  DropDownContainer,
  DropDownListContainer,
  DropDownList,
  ListItem,
  ActiveIconButton,
  DropDownHeader,
  ColumnContainer,
} from '../../styles/DropDown'
import { IconButton } from '../../styles/Button'
import { GrAdd } from 'react-icons/gr'
import handleClickOutside from '../../utils/ClickOutsideUtil'
import { SecondaryText } from '../../styles/Text'
import { BsPencilSquare } from 'react-icons/bs'

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
            <ListItem onClick={toggling} noMarginBottom flexRow>
              <IconButton small margin>
                <BsPencilSquare />
              </IconButton>
              <ColumnContainer>
                <span>Post</span>
                <SecondaryText noMargin>
                  Share a post on News Feed.
                </SecondaryText>
              </ColumnContainer>
            </ListItem>
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}

export default CreateDropdown
