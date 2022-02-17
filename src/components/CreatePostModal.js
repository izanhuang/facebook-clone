import React, { useEffect, useState, useRef } from 'react'
import ReactModal from 'react-modal'
import { DropDownHeader, ListItem } from '../styles/DropDown'
import {
  CenterElement,
  CreatePostWrapper,
  HomeWrapper,
} from '../styles/Wrapper'
import { IconButton } from '../styles/Button'
import { Avatar } from '../styles/Avatar'
import { PostImage, PostImageContainer, TextArea } from '../styles/PostStyling'
import { GrClose } from 'react-icons/gr'
import { Button } from '../styles/Button'
import { BsFileEarmarkImage, BsEmojiLaughing } from 'react-icons/bs'
import { AiOutlineFileGif } from 'react-icons/ai'
import 'emoji-mart/css/emoji-mart.css'
import { NimblePicker } from 'emoji-mart'
import { useTheme } from '../contexts/ThemeContext'
import data from 'emoji-mart/data/twitter.json'
import { useAuth } from '../contexts/AuthContext'
import { addUserPost } from '../utils/firebaseUtils'
import { ErrorMessage } from '../styles/Text'

const CreatePostModal = ({
  showModal,
  setShowModal,
  userDetails,
  newPost,
  setNewPost,
}) => {
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [showEmoji, setShowEmoji] = useState(false)
  const [error, setError] = useState(false)
  const { theme } = useTheme()
  const { currentUser } = useAuth()
  const inputFileRef = useRef(null)
  function handleCloseModal() {
    setShowModal(false)
  }

  useEffect(() => {
    ReactModal.setAppElement('body')
  }, [])

  const onImageUploadButtonClick = () => {
    inputFileRef.current.click()
  }

  const onImageChange = (event) => {
    const reader = new FileReader()
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0])
      setError(false)
    }

    reader.onload = (readerEvent) => {
      setNewPost({
        ...newPost,
        image: readerEvent.target.result,
      })
    }
  }

  const removeImage = () => {
    setNewPost({ ...newPost, image: '#' })
  }

  const handleFeelingClick = () => {
    setShowEmoji(!showEmoji)
  }

  const addEmoji = (e) => {
    let sym = e.unified.split('-')
    let codesArray = []
    sym.forEach((el) => codesArray.push('0x' + el))
    let emoji = String.fromCodePoint(...codesArray)
    let newText = newPost.text + emoji
    setNewPost({ ...newPost, text: newText })
  }

  const sendPost = async (e) => {
    e.preventDefault()
    const isSuccessful = await addUserPost(currentUser, userDetails, newPost)
    console.log(isSuccessful)
    if (isSuccessful === false) {
      setError(true)
    } else {
      setNewPost({ text: '', image: '#' })
      setError(false)
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
    <form>
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
              ? newPost.text.replace(/\s/g, '') === ''
                ? { fontSize: '0.937rem', height: 'auto' }
                : { fontSize: '0.937rem', height: '100px' }
              : { fontSize: '1.5rem', height: 'auto' }
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
          <IconButton remove onClick={removeImage}>
            <GrClose />
          </IconButton>
        </PostImageContainer>
        <HomeWrapper createPost>
          <ListItem photo onClick={onImageUploadButtonClick}>
            <BsFileEarmarkImage />
            Photo
            <input
              accept="image/*"
              type="file"
              id="imgInput"
              ref={inputFileRef}
              onChange={onImageChange}
            />
          </ListItem>
          <ListItem feeling onClick={handleFeelingClick}>
            <BsEmojiLaughing />
            Feeling
          </ListItem>
          <NimblePicker
            data={data}
            set="twitter"
            onSelect={addEmoji}
            showPreview={false}
            showSkinTones={false}
            native={false}
            theme={theme}
            perLine={8}
            style={
              showEmoji
                ? {
                    display: 'block',
                    position: 'absolute',
                    bottom: '125px',
                    left: '50px',
                  }
                : { display: 'none' }
            }
          />
          {/* <ListItem gif>
            <AiOutlineFileGif />
            GIF
          </ListItem> */}
        </HomeWrapper>
        <CreatePostWrapper>
          {error && <ErrorMessage>* Image file size too large</ErrorMessage>}
          <Button
            post
            bold
            disabled={btnDisabled}
            type="submit"
            onClick={sendPost}
          >
            Post
          </Button>
        </CreatePostWrapper>
      </ReactModal>
    </form>
  )
}

export default CreatePostModal
