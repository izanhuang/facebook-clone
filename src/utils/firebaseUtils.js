import db from './firebase'
import { onSnapshot, collection, doc, setDoc } from 'firebase/firestore'

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
        .filter((doc) => doc.id == currentUser.uid)
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
  console.log('Updated doc')
}

export async function getAllUsers(setUsers) {
  onSnapshot(collection(db, 'Users'), (snapshot) => {
    setUsers([...snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))])
    console.log('Retrieved users')
  })
}
