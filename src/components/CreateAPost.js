import React, { useState } from 'react'
import { CreatePostContainer, Post } from '../styles/Post'
import { Avatar } from '../styles/Avatar'
import { CreatePostButton } from '../styles/Button'
import CreatePostModal from './CreatePostModal'
import { useData } from '../contexts/DataContext'
import { useAuth } from '../contexts/AuthContext'

const CreateAPost = () => {
  const { userDetails, newPost, setNewPost } = useData()
  const { currentUser } = useAuth()

  const [showModal, setShowModal] = useState(false)

  function handleOpenModal() {
    setShowModal(true)
  }

  return (
    <Post id="create-post">
      <CreatePostContainer>
        <Avatar marginRight8 small src={userDetails.profileImg} />
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
    </Post>
  )
}

export default CreateAPost
