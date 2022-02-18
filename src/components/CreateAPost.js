import React, { useState } from 'react'
import { CreatePostContainer, PostCard } from '../styles/PostStyling'
import { Avatar } from '../styles/Avatar'
import { CreatePostButton } from '../styles/Button'
import CreatePostModal from './CreatePostModal'
import { useData } from '../contexts/DataContext'
import { useNavigate } from 'react-router-dom'

const CreateAPost = () => {
  const { userDetails, newPost, setNewPost } = useData()
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false)

  function handleOpenModal() {
    setShowModal(true)
  }

  return (
    <PostCard id="create-post">
      <CreatePostContainer>
        <Avatar
          marginRight8
          small
          src={userDetails.profileImg}
          onClick={() => {
            navigate(`/${userDetails.userName}`)
          }}
        />
        <CreatePostButton onClick={handleOpenModal}>
          {newPost.text.replace(/\s/g, '') === ''
            ? `What's on your mind, ${userDetails.firstName}?`
            : newPost.text}
        </CreatePostButton>
        <CreatePostModal
          showModal={showModal}
          setShowModal={setShowModal}
          userDetails={userDetails}
          newPost={newPost}
          setNewPost={setNewPost}
        />
      </CreatePostContainer>
    </PostCard>
  )
}

export default CreateAPost
