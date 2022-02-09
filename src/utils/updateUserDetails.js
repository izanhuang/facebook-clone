import db from './firebase'
import { setDoc, doc } from 'firebase/firestore'

export default async function updateUserDetails(userDetails) {
  const docRef = doc(db, 'Users', userDetails.uid)
  console.log('User data ', userDetails)
  await setDoc(docRef, userDetails)
  console.log('Updated doc')
}
