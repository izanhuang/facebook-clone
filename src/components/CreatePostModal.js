import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import { DropDownHeader, DropDownList, ListItem } from '../styles/DropDown'
import {
  CenterElement,
  CreatePostWrapper,
  HomeWrapper,
} from '../styles/Wrapper'
import { IconButton } from '../styles/Button'
import { Avatar } from '../styles/Avatar'
import { TextArea } from '../styles/Post'
import { GrClose } from 'react-icons/gr'
import { Button } from '../styles/Button'
import { BsFileEarmarkImage, BsEmojiLaughing } from 'react-icons/bs'
import { AiOutlineFileGif } from 'react-icons/ai'

const CreatePostModal = ({
  showModal,
  setShowModal,
  userDetails,
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
          <Avatar
            small
            src={userDetails.profileImg}
            alt="current profile image"
          />
          {userDetails.firstName + ' ' + userDetails.lastName}
        </ListItem>
        <TextArea
          onChange={(e) => {
            setNewPost({ text: e.target.value, content: newPost.content })
            if (e.target.value.replace(/\s/g, '') === '') {
              setDisabled(true)
            } else {
              setDisabled(false)
            }
          }}
          placeholder={`What's on your mind, ${userDetails.firstName}?`}
          value={newPost.text}
        />
        <HomeWrapper createPost>
          <ListItem photo>
            <BsFileEarmarkImage />
            Photo
          </ListItem>
          <ListItem feeling>
            <BsEmojiLaughing />
            Feeling
          </ListItem>
          <ListItem gif>
            <AiOutlineFileGif />
            GIF
          </ListItem>
        </HomeWrapper>
        <CreatePostWrapper>
          <Button post bold createButtonDisabled disabled={disabled}>
            Post
          </Button>
        </CreatePostWrapper>
      </ReactModal>
    </div>
  )
}

export default CreatePostModal
