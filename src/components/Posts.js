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

  //   onSnapshot(q, (querySnapshot) => {
  //     const posts = []
  //     querySnapshot.forEach((doc) => {
  //       posts.push(doc.data())
  //     })
  //   }),
  return (
    <PostsContainer>
      {/* {console.log(
        realtimePosts &&
          realtimePosts.docs.map((post) => console.log(post.data())),
      )} */}
      {/* {realtimePosts.docs.map((post) => console.log(post.data().email))} */}
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
          />
        ))}
    </PostsContainer>
  )
}

export default Posts
