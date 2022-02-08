import db from './firebase'
import { setDoc, doc } from 'firebase/firestore'

export default async function updateUser(
  uid,
  firstName,
  lastName,
  birthDate,
  genderCode,
  userName,
  profileImg,
  createdDate,
) {
  // console.log('Inside update, no null: ', currentUser.uid)
  const docRef = doc(db, 'Users', uid)
  console.log(
    'User data ',
    uid,
    firstName,
    lastName,
    birthDate,
    genderCode,
    userName,
    profileImg,
    createdDate,
  )
  const payload = {
    uid,
    firstName,
    lastName,
    birthDate,
    genderCode,
    userName,
    profileImg,
    createdDate,
  }
  await setDoc(docRef, payload)
  console.log('Updated doc')
}
