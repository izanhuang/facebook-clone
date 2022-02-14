import React from 'react'
import { Avatar } from '../styles/Avatar'
import {
  PostCard,
  PostImage,
  PostCardHeaderLabel,
  PostCardHeaderContainer,
  PostCardText,
  PostCardStats,
  PostCardActions,
} from '../styles/PostStyling'
import styled from 'styled-components'
import { SecondaryText } from '../styles/Text'
import { ListItem } from '../styles/DropDown'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
import { FaRegCommentAlt } from 'react-icons/fa'
import { BiShare } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import PostOptionsDropdown from './Dropdown/PostOptionsDropdown'
import { useAuth } from '../contexts/AuthContext'
import { useData } from '../contexts/DataContext'
import { updateUserPostLikes } from '../utils/firebaseUtils'

const Post = ({
  docId,
  name,
  text,
  email,
  image,
  profileImg,
  userName,
  timestamp,
  uid,
  likes,
  comments,
  shares,
}) => {
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  const { userDetails } = useData()

  const hasPostStats = likes.length > 0 || comments.length > 0 || shares > 0

  return (
    <PostCard post>
      <PostCardHeaderContainer>
        <Avatar
          small
          marginRight8
          src={profileImg}
          alt="current profile image"
          onClick={() => {
            navigate(`/${userName}`)
          }}
        />
        <PostCardHeaderLabel>
          <p
            className="name"
            onClick={() => {
              navigate(`/${userName}`)
            }}
          >
            {name}
          </p>
          <SecondaryText>
            {new Date(timestamp?.toDate()).toLocaleString()}
          </SecondaryText>
        </PostCardHeaderLabel>
        {currentUser.uid === uid && <PostOptionsDropdown docId={docId} />}
      </PostCardHeaderContainer>
      {text !== '' && <PostCardText>{text}</PostCardText>}
      {image !== '#' && <PostImage post src={image} alt="post image" />}
      <div>
        {hasPostStats && (
          <PostCardStats>
            {likes.length > 0 && (
              <>
                <img
                  alt="facebook 3d liked icon"
                  src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                />
                <SecondaryText className="likes">{likes.length}</SecondaryText>
              </>
            )}

            {comments.length > 0 && (
              <SecondaryText>{comments.length + ' '}Comments</SecondaryText>
            )}
            {shares > 0 && <SecondaryText>{shares + ' '} Shares</SecondaryText>}
          </PostCardStats>
        )}

        <PostCardActions
          borderTop={
            image === '#' &&
            likes.length === 0 &&
            comments.length === 0 &&
            shares === 0
          }
        >
          <ListItem
            onClick={() => {
              updateUserPostLikes(docId, currentUser, userDetails, likes)
            }}
          >
            {likes.some((like) => like.uid === currentUser.uid) ? (
              <>
                <AiFillLike className="liked" />
                <SecondaryText className="liked">Like</SecondaryText>
              </>
            ) : (
              <>
                <AiOutlineLike className="like" />
                <SecondaryText>Like</SecondaryText>
              </>
            )}
          </ListItem>
          <ListItem>
            <FaRegCommentAlt className="comment" />
            <SecondaryText>Comment</SecondaryText>
          </ListItem>
          <ListItem>
            <BiShare className="share" />
            <SecondaryText>Share</SecondaryText>
          </ListItem>
        </PostCardActions>
      </div>
    </PostCard>
  )
}

export default Post
