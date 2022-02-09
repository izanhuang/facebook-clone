import React, { useEffect, useState, useRef } from 'react'
import ReactModal from 'react-modal'
import { DropDownHeader, DropDownList, ListItem } from '../styles/DropDown'
import {
  CenterElement,
  CreatePostWrapper,
  HomeWrapper,
} from '../styles/Wrapper'
import { IconButton } from '../styles/Button'
import { Avatar } from '../styles/Avatar'
import { PostImage, PostImageContainer, TextArea } from '../styles/Post'
import { GrClose } from 'react-icons/gr'
import { Button } from '../styles/Button'
import { BsFileEarmarkImage, BsEmojiLaughing } from 'react-icons/bs'
import { AiOutlineFileGif } from 'react-icons/ai'
import { Label } from '../styles/Label'

const CreatePostModal = ({
  showModal,
  setShowModal,
  userDetails,
  newPost,
  setNewPost,
}) => {
  const [btnDisabled, setBtnDisabled] = useState(true)
  const inputFile = useRef(null)
  function handleCloseModal() {
    setShowModal(false)
  }

  useEffect(() => {
    ReactModal.setAppElement('body')
  }, [])

  const onImageUploadButtonClick = () => {
    inputFile.current.click()
  }

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setNewPost({
        ...newPost,
        image: URL.createObjectURL(event.target.files[0]),
      })
    }
  }

  useEffect(() => {
    if (newPost.text.replace(/\s/g, '') === '' && newPost.image === '#') {
      setBtnDisabled(true)
    } else {
      setBtnDisabled(false)
    }
  }, [newPost])

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
            setNewPost({ ...newPost, text: e.target.value })
          }}
          placeholder={`What's on your mind, ${userDetails.firstName}?`}
          value={newPost.text}
          style={
            newPost.image !== '#'
              ? { fontSize: '0.937rem' }
              : { fontSize: '1.5rem' }
          }
        />
        <PostImageContainer
          style={
            newPost.image !== '#'
              ? {
                  display: 'block',
                }
              : { display: 'none' }
          }
        >
          <PostImage
            id="post-image"
            src={newPost.image}
            alt="new post image"
            style={
              newPost.image !== '#' ? { display: 'block' } : { display: 'none' }
            }
          />
        </PostImageContainer>
        <HomeWrapper createPost>
          <ListItem photo onClick={onImageUploadButtonClick}>
            <BsFileEarmarkImage />
            Photo
            <input
              accept="image/*"
              type="file"
              id="imgInput"
              ref={inputFile}
              onChange={onImageChange}
            />
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
          <Button post bold disabled={btnDisabled}>
            Post
          </Button>
        </CreatePostWrapper>
      </ReactModal>
    </div>
  )
}

export default CreatePostModal
