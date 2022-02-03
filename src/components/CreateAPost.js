import React, { useState } from 'react'
import { CreatePostContainer, Post } from '../styles/Post'
import { useAuth } from '../contexts/AuthContext'
import { Avatar } from '../styles/Avatar'
import { CreatePostButton } from '../styles/Button'
import CreatePostModal from './CreatePostModal'

const CreateAPost = () => {
  const { user, newPost, setNewPost } = useAuth()

  const [showModal, setShowModal] = useState(false)

  function handleOpenModal() {
    setShowModal(true)
  }

  return (
    <Post id="create-post">
      <CreatePostContainer>
        <Avatar marginRight8 small src={user.profileImg} />
        <CreatePostButton onClick={handleOpenModal}>
          {newPost.text.replace(/\s/g, '') === ''
            ? `What's on your mind, ${user.firstName}?`
            : newPost.text}
        </CreatePostButton>
        <CreatePostModal
          showModal={showModal}
          setShowModal={setShowModal}
          user={user}
          newPost={newPost}
          setNewPost={setNewPost}
        />
      </CreatePostContainer>
    </Post>
  )
}

export default CreateAPost
