import React, { useEffect, useState, useRef } from 'react'
import {
  DropDownContainer,
  DropDownListContainer,
  DropDownList,
  ListItem,
  ColumnContainer,
} from '../../styles/DropDown'
import { IconButton } from '../../styles/Button'
import handleClickOutside from '../../utils/ClickOutsideUtil'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import { useData } from '../../contexts/DataContext'
import { deleteUserPost } from '../../utils/firebaseUtils'

const PostOptionsDropdown = ({ docId }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggling = () => setIsOpen(!isOpen)
  const wrapperRef = useRef(null)

  const { userDetails, newPost, setNewPost } = useData()
  const [showModal, setShowModal] = useState(false)

  function handleOpenModal() {
    setShowModal(true)
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
      <IconButton bgOnHover onClick={toggling}>
        <BiDotsHorizontalRounded />
      </IconButton>

      {isOpen && (
        <DropDownListContainer>
          <DropDownList postOptions>
            <ListItem
              onClick={() => {
                toggling()
                deleteUserPost(docId)
              }}
              noMarginBottom
              flexRow
              danger
            >
              <IconButton small margin noPadding noBg>
                <AiOutlineDelete />
              </IconButton>
              <ColumnContainer>
                <span style={{ fontWeight: '600' }}>Delete post</span>
              </ColumnContainer>
            </ListItem>
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}

export default PostOptionsDropdown
