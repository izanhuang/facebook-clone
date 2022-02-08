import db from './firebase'
import { onSnapshot, collection } from 'firebase/firestore'

export default function loadUserPlaceholder(setUserDetails) {
  return onSnapshot(collection(db, 'Users'), (snapshot) => {
    setUserDetails(
      ...snapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter((doc) => doc.id === 'Placeholder'),
    )
  })
}
