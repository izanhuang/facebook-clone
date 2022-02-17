import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { query, collection, orderBy } from 'firebase/firestore'
import db from '../utils/firebase'
import Post from './Post'
import { PostsContainer } from '../styles/PostStyling'

const Posts = () => {
  const postsRef = collection(db, 'posts')
  const q = query(postsRef, orderBy('timestamp', 'desc'))
  const [realtimePosts, loading, error] = useCollection(q, {
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
