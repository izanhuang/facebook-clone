import db from './firebase'
import { onSnapshot, collection } from 'firebase/firestore'

export default function loadUserDetails(currentUser, setUserDetails) {
  onSnapshot(collection(db, 'Users'), (snapshot) => {
    setUserDetails(
      ...snapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter((doc) => doc.id === currentUser.uid),
    )
  })
  console.log('Loaded user details')
}
