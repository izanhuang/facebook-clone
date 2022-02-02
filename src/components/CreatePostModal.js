import React from 'react'
import ReactModal from 'react-modal'
import { DropDownHeader, ListItem } from '../styles/DropDown'
import { CenterElement } from '../styles/Wrapper'
import { IconButton } from '../styles/Button'
import { Avatar } from '../styles/Avatar'
import { TextArea } from '../styles/Post'

const CreatePostModal = ({ showModal, setShowModal, user }) => {
  function handleCloseModal() {
    setShowModal(false)
  }

  return (
    <div>
      <ReactModal
        isOpen={showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={handleCloseModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <CenterElement createPostDivider>
          <DropDownHeader padding>Create post</DropDownHeader>
          <IconButton onClick={handleCloseModal}>Close Modal</IconButton>
        </CenterElement>
        <ListItem createPost>
          <Avatar small src={user.profileImg} />
          {user.firstName + ' ' + user.lastName}
        </ListItem>
        <TextArea></TextArea>
      </ReactModal>
    </div>
  )
}

export default CreatePostModal
