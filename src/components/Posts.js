import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import {
  query,
  collection,
  getFirestore,
  orderBy,
  onSnapshot,
} from 'firebase/firestore'
import db from '../utils/firebase'
import Post from './Post'

const Posts = () => {
  const postsRef = collection(db, 'posts')
  //   const q = query(postsRef, orderBy('timestamp', 'desc'))
  const [realtimePosts, loading, error] = useCollection(
    collection(db, 'posts'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    },
  )

  //   onSnapshot(q, (querySnapshot) => {
  //     const posts = []
  //     querySnapshot.forEach((doc) => {
  //       posts.push(doc.data())
  //     })
  //   }),
  return (
    <div>
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
            profileImg={post.data().profileImg}
          />
        ))}
    </div>
  )
}

export default Posts
