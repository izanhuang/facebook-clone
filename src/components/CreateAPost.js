import React, { useState } from 'react'
import { CreatePostContainer, Post } from '../styles/Post'
import { useAuth } from '../contexts/AuthContext'
import { Avatar } from '../styles/Avatar'
import { CreatePostButton } from '../styles/Button'
import CreatePostModal from './CreatePostModal'

const CreateAPost = () => {
  const { user } = useAuth()
  const [showModal, setShowModal] = useState(false)

  function handleOpenModal() {
    setShowModal(true)
  }

  return (
    <Post>
      <CreatePostContainer>
        <Avatar marginRight8 small src={user.profileImg} />
        <CreatePostButton onClick={handleOpenModal}>
          What's on your mind, {user.firstName}?
        </CreatePostButton>
        <CreatePostModal
          showModal={showModal}
          setShowModal={setShowModal}
          user={user}
        />
      </CreatePostContainer>
    </Post>
  )
}

export default CreateAPost
