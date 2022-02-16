import db, { storage } from './firebase'
import {
  onSnapshot,
  collection,
  setDoc,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
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

export async function updateUserDetails(userDetails) {
  const docRef = doc(db, 'Users', userDetails.uid)
  // console.log('User data ', userDetails)
  const payload = userDetails
  await setDoc(docRef, payload)
  console.log('Updated users doc')
}

export async function addUserPost(
  currentUser,
  userDetails,
  newPost,
  sharedFrom = {},
) {
  const image = newPost.image
  addDoc(collection(db, 'posts'), {
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
  })
  // .then((docum) => {
  //   if (image) {
  //     const storageRef = ref(storage, `posts/${docum.id}`)
  //     const uploadTask = uploadBytesResumable(storageRef, image, 'data_url')

  // uploadTask.on(
  //   'state_changed',
  //   null,
  //   (error) => {
  //     console.error(error)
  //   },
  //   () => {
  //     getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
  //       console.log('File available at', downloadURL)
  //       await setDoc(
  //         doc(db, 'posts', docum.id),
  //         { image: downloadURL },
  //         { merge: true },
  //       )
  //     })
  //   },
  // )
  //   }
  // })
  console.log('Updated posts doc')
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
  console.log('Updated user post comments')
}

export async function updateUserPostShares(docId, shares) {
  const docRef = doc(db, 'posts', docId)
  const updateField = { shares: shares + 1 }
  await updateDoc(docRef, updateField)
}

export async function deleteUserPost(docId) {
  await deleteDoc(doc(db, 'posts', docId))
  console.log('Deleted user post')
}

export async function getAllUsers(setUsers) {
  onSnapshot(collection(db, 'Users'), (snapshot) => {
    setUsers([...snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))])
    console.log('Retrieved users')
  })
}
