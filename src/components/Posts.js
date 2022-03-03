import React, { useState, useEffect } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { query, collection, where, orderBy } from 'firebase/firestore'
import db from '../utils/firebase'
import Post from './Post'
import { PostsContainer } from '../styles/PostStyling'
import { useAuth } from '../contexts/AuthContext'
import { getUserFriendsList } from '../utils/firebaseUtils'

const Posts = () => {
  const { currentUser } = useAuth()
  const [currentUserFriendsList, setCurrentUserFriendsList] = useState([
    currentUser.uid,
  ])

  useEffect(() => {
    async function getFriendsList() {
      const friendsList = await getUserFriendsList(currentUser.uid)
      setCurrentUserFriendsList(currentUserFriendsList.concat(friendsList))
    }
    getFriendsList()
  }, [])

  const postsRef = collection(db, 'posts')
  const q = query(
    postsRef,
    where('uid', 'in', currentUserFriendsList),
    orderBy('timestamp', 'desc'),
  )
  const [realtimePosts] = useCollection(q, {
    snapshotListenOptions: { includeMetadataChanges: true },
  })

  return (
    <PostsContainer>
      {realtimePosts &&
        realtimePosts.docs.map((post) => (
          <Post
            key={post.id}
            name={post.data().name}
            text={post.data().text}
            email={post.data().email}
            timestamp={post.data().timestamp}
            image={post.data().image}
            userName={post.data().userName}
            profileImg={post.data().profileImg}
            uid={post.data().uid}
            docId={post.id}
            likes={post.data().likes}
            comments={post.data().comments}
            shares={post.data().shares}
            sharedFrom={post.data().sharedFrom}
          />
        ))}
    </PostsContainer>
  )
}

export default Posts
