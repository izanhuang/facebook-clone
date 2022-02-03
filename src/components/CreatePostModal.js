import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import { DropDownHeader, ListItem } from '../styles/DropDown'
import { CenterElement, CreatePostWrapper } from '../styles/Wrapper'
import { IconButton } from '../styles/Button'
import { Avatar } from '../styles/Avatar'
import { TextArea } from '../styles/Post'
import { GrClose } from 'react-icons/gr'
import { Button } from '../styles/Button'

const CreatePostModal = ({
  showModal,
  setShowModal,
  user,
  newPost,
  setNewPost,
}) => {
  const [disabled, setDisabled] = useState(true)
  function handleCloseModal() {
    setShowModal(false)
  }

  useEffect(() => {
    ReactModal.setAppElement('body')
  }, [])

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
          <IconButton close onClick={handleCloseModal}>
            <GrClose />
          </IconButton>
        </CenterElement>

        <ListItem createPost>
          <Avatar small src={user.profileImg} alt="current profile image" />
          {user.firstName + ' ' + user.lastName}
        </ListItem>
        <TextArea
          onChange={(e) => {
            setNewPost(e.target.value)
            if (e.target.value.replace(/\s/g, '') === '') {
              setDisabled(true)
            } else {
              setDisabled(false)
            }
          }}
          placeholder={`What's on your mind, ${user.firstName}?`}
          value={newPost}
        />
        <CreatePostWrapper>
          <Button post bold disabled={disabled}>
            Post
          </Button>
        </CreatePostWrapper>
      </ReactModal>
    </div>
  )
}

export default CreatePostModal
