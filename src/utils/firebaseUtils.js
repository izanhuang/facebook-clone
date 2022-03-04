import db, { storage } from './firebase'
import {
  onSnapshot,
  collection,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
} from 'firebase/firestore'
import { serverTimestamp } from 'firebase/firestore'
import {
  ref,
  uploadString,
  getDownloadURL,
  uploadBytesResumable,
} from 'firebase/storage'

export function loadUserPlaceholder(setUserDetails) {
  return onSnapshot(collection(db, 'Users'), (snapshot) => {
    setUserDetails(
      ...snapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter((doc) => doc.id === 'Placeholder'),
    )
    console.log('Loaded placeholder')
  })
}

export function loadUserDetails(currentUser, setUserDetails, setTheme) {
  onSnapshot(collection(db, 'Users'), (snapshot) => {
    setUserDetails(
      ...snapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter((doc) => doc.id === currentUser.uid),
    )
    setTheme(
      ...snapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter((doc) => doc.id === currentUser.uid)
        .map((doc) => doc.theme),
    )
  })
  console.log('Loaded user details')
}

async function updatePostDocData(docId, postDataToUpdate) {
  const postRef = doc(db, 'posts', docId)
  await updateDoc(postRef, postDataToUpdate)
}

export async function isUserNameAvaliable(userName) {
  const q = query(collection(db, 'Users'), where('userName', '==', userName))
  const querySnapshot = await getDocs(q)
  if (querySnapshot.empty) {
    return true
  } else {
    return false
  }
}

export async function updateUserDetails(userDetails) {
  const usersRef = doc(db, 'Users', userDetails.uid)
  const payload = userDetails
  const isSuccessful = await setDoc(usersRef, payload).catch((e) => {
    return false
  })
  if (isSuccessful === false) {
    return isSuccessful
  } else {
    console.log('Updated users doc')
    return true
  }
}

export async function createUserFriendDoc(uid) {
  await setDoc(doc(db, 'Friends', uid), {
    friendsList: [],
  })
  console.log('Created friend doc')
}

export async function updateUserProfileImg(uid, profileImg) {
  if (profileImg) {
    const storageRef = ref(storage, `Users/${uid}`)
    return uploadString(storageRef, profileImg, 'data_url')
      .then(async () => {
        return getDownloadURL(storageRef).then(async (downloadURL) => {
          await setDoc(
            doc(db, 'Users', uid),
            { profileImg: downloadURL },
            { merge: true },
          )
          return downloadURL
        })
      })
      .catch((error) => {
        return false
      })
  }
}

export async function updateUserDetailsOnUserPosts(userDetails) {
  const postsRef = collection(db, 'posts')
  const q = query(postsRef, where('uid', '==', userDetails.uid))
  const postDataToUpdate = {
    profileImg: userDetails.profileImg,
    userName: userDetails.userName,
    name: userDetails.firstName + ' ' + userDetails.lastName,
  }
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((document) => {
    updatePostDocData(document.id, postDataToUpdate)
  })
}

export async function updateUserDetailsOnLikesAndComments(userDetails) {
  const querySnapshot = await getDocs(collection(db, 'posts'))
  querySnapshot.forEach((document) => {
    if (document.data().likes.length > 0) {
      const likes = document.data().likes
      const postLikedByUserIndex = likes.findIndex(
        (like) => like.uid === userDetails.uid,
      )
      if (postLikedByUserIndex !== -1) {
        const updatedLikeWithUserDetails = {
          name: userDetails.firstName + ' ' + userDetails.lastName,
          profileImg: userDetails.profileImg,
          uid: userDetails.uid,
          userName: userDetails.userName,
        }
        likes[postLikedByUserIndex] = updatedLikeWithUserDetails
        const postDataToUpdate = { likes }
        updatePostDocData(document.id, postDataToUpdate)
      }
    }
    if (document.data().comments.length > 0) {
      const comments = document.data().comments
      comments.map((comment, index) => {
        if (comment.uid === userDetails.uid) {
          const updatedCommentWithUserDetails = {
            ...comment,
            name: userDetails.firstName + ' ' + userDetails.lastName,
            profileImg: userDetails.profileImg,
            userName: userDetails.userName,
          }
          comments[index] = updatedCommentWithUserDetails
          const postDataToUpdate = { comments }
          updatePostDocData(document.id, postDataToUpdate)
        }
      })
    }
  })
}

export async function addUserPost(
  currentUser,
  userDetails,
  newPost,
  sharedFrom = {},
) {
  const image = newPost.image
  const isSuccessful = await addDoc(collection(db, 'posts'), {
    text: newPost.text,
    image,
    uid: currentUser.uid,
    name: userDetails.firstName + ' ' + userDetails.lastName,
    email: currentUser.email,
    profileImg: userDetails.profileImg,
    userName: userDetails.userName,
    timestamp: serverTimestamp(),
    likes: [],
    comments: [],
    shares: 0,
    sharedFrom,
  }).then((docum) => {
    if (image) {
      const storageRef = ref(storage, `posts/${docum.id}`)
      uploadString(storageRef, image, 'data_url')
        // .then((snapshot) => {
        //   console.log('Uploaded a data_url string!')
        // })
        .then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            await setDoc(
              doc(db, 'posts', docum.id),
              { image: downloadURL },
              { merge: true },
            )
          })
        })
        .catch((error) => {
          return false
        })
    }
  })

  if (isSuccessful === false) {
    return isSuccessful
  } else {
    // console.log('Updated posts doc')
    return true
  }
}

export async function updateUserPostLikes(
  docId,
  currentUser,
  userDetails,
  likes,
) {
  const docRef = doc(db, 'posts', docId)
  const filteredLikes = likes.filter((like) => like.uid !== currentUser.uid)
  if (likes.some((like) => like.uid === currentUser.uid)) {
    var updatedLikes = [...filteredLikes]
  } else {
    let newLike = {
      uid: currentUser.uid,
      userName: userDetails.userName,
      name: userDetails.firstName + ' ' + userDetails.lastName,
      profileImg: userDetails.profileImg,
    }
    var updatedLikes = [...filteredLikes, newLike]
  }

  const updateField = { likes: updatedLikes }
  await updateDoc(docRef, updateField)
  console.log('Updated user post likes')
}

export async function updateUserPostComments(
  docId,
  currentUser,
  userDetails,
  comments,
  comment,
) {
  const docRef = doc(db, 'posts', docId)
  let newComment = {
    uid: currentUser.uid,
    userName: userDetails.userName,
    name: userDetails.firstName + ' ' + userDetails.lastName,
    profileImg: userDetails.profileImg,
    comment: comment,
  }
  const updateField = { comments: [...comments, newComment] }
  await updateDoc(docRef, updateField)
}

export async function updateUserPostShares(docId, shares) {
  const docRef = doc(db, 'posts', docId)
  const updateField = { shares: shares + 1 }
  await updateDoc(docRef, updateField)
}

export async function deleteUserPost(docId) {
  await deleteDoc(doc(db, 'posts', docId))
}

export async function getAllUsers(setUsers) {
  onSnapshot(collection(db, 'Users'), (snapshot) => {
    setUsers([...snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))])
    console.log('Retrieved users')

    // snapshot.docChanges().forEach((change) => {
    //   if (change.type === 'added') {
    //     setUsers([
    //       ...snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
    //     ])
    //     console.log('Retrieved users')
    //   }
    // })
  })
}

export async function getUserProfile(userName) {
  const postsRef = collection(db, 'Users')
  const q = query(postsRef, where('userName', '==', userName))
  const docSnap = await getDocs(q)

  if (docSnap.docs.length > 0 && docSnap.docs[0]) {
    return docSnap.docs[0].data()
  } else {
    return false
  }
}

export async function getUserPosts(uid) {
  const postsRef = collection(db, 'posts')
  const q = query(
    postsRef,
    where('uid', '==', uid),
    orderBy('timestamp', 'desc'),
  )
  return await getDocs(q)
}

export async function getUserFriendsList(uid) {
  const docRef = doc(db, 'Friends', uid)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data().friendsList
  } else {
    return []
  }
}

export async function addUserFriend(
  uid,
  friendUid,
  setUserFriendsList,
  setProfileFriendsList,
) {
  var friendsList = await getUserFriendsList(uid)
  var newFriendFriendsList = await getUserFriendsList(friendUid)

  if (!friendsList.includes(friendUid)) {
    friendsList = [...friendsList, friendUid]
    newFriendFriendsList = [...newFriendFriendsList, uid]
    // console.log('Added friend')
  } else {
    const uidIndex = friendsList.indexOf(friendUid)
    friendsList.splice(uidIndex, 1)
    const friendUidIndex = newFriendFriendsList.indexOf(uid)
    newFriendFriendsList.splice(friendUidIndex, 1)
    // console.log('Removed friend')
  }
  await setDoc(doc(db, 'Friends', uid), {
    friendsList: friendsList,
  })
  await setDoc(doc(db, 'Friends', friendUid), {
    friendsList: newFriendFriendsList,
  })

  setUserFriendsList(await getUserFriendsList(uid))
  setProfileFriendsList(await getUserFriendsList(friendUid))
}

export async function getFriendsInfo(friendsList, setFriendsInfo) {
  var friendsInfo = []
  if (friendsList.length !== 0) {
    const q = query(collection(db, 'Users'), where('uid', 'in', friendsList))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      friendsInfo = [...friendsInfo, doc.data()]
    })
    setFriendsInfo(friendsInfo)
  } else {
    setFriendsInfo(friendsInfo)
  }
}
