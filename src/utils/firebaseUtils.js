import db, { storage } from './firebase'
import { onSnapshot, collection, setDoc, addDoc, doc } from 'firebase/firestore'
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

export async function updateUserPosts(currentUser, userDetails, newPost) {
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

export async function getAllUsers(setUsers) {
  onSnapshot(collection(db, 'Users'), (snapshot) => {
    setUsers([...snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))])
    console.log('Retrieved users')
  })
}
