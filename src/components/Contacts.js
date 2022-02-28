import React, { useEffect, useState } from 'react'
import { Wrapper, Nav, List, ImageWrapper } from '../styles/LeftAndRightNav'
import { ListItem } from '../styles/DropDown'
import { useAuth } from '../contexts/AuthContext'
import { getUserFriendsList, getFriendsInfo } from '../utils/firebaseUtils'
import { Avatar } from '../styles/Avatar'
import { useNavigate } from 'react-router-dom'

const Contacts = () => {
  const { currentUser } = useAuth()
  const [contactsList, setContactsList] = useState([])
  const [contactsInfo, setContactsInfo] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function getContacts() {
      const retrievedContactsList = await getUserFriendsList(currentUser.uid)
      setContactsList(retrievedContactsList)
      await getFriendsInfo(retrievedContactsList, setContactsInfo)
    }
    getContacts()
  }, [])

  return (
    <Wrapper contacts>
      <Nav contacts>
        Contacts
        {contactsList &&
          contactsList.length > 0 &&
          contactsInfo &&
          contactsInfo.length > 0 && (
            <List contacts>
              {contactsInfo.map((contact, index) => (
                <ListItem
                  key={index}
                  onClick={() => {
                    navigate(`/${contact.userName}`)
                  }}
                >
                  <Avatar
                    small
                    src={contact.profileImg}
                    alt="contact profile image"
                  />
                  <p>{contact.firstName + ' ' + contact.lastName}</p>
                </ListItem>
              ))}
            </List>
          )}
      </Nav>
    </Wrapper>
  )
}

export default Contacts
