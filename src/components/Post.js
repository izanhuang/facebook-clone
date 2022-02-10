import React from 'react'
import { Avatar } from '../styles/Avatar'

const Post = ({ name, text, email, image, profileImg, timestamp }) => {
  return (
    <div>
      <Avatar small src={profileImg} />
      <p>{name}</p>
      {/* <p>{timestamp}</p> */}
      <p>{text}</p>
      <img src={image} />
    </div>
  )
}

export default Post
