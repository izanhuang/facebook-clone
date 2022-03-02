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
              <ListItem
                key={2}
                onClick={() => {
                  navigate(`/a`)
                }}
              >
                <Avatar
                  small
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt="contact profile image"
                />
                <p>Izan Huang</p>
              </ListItem>
              <ListItem
                key={3}
                onClick={() => {
                  navigate(`/a`)
                }}
              >
                <Avatar
                  small
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt="contact profile image"
                />
                <p>Izan Huang</p>
              </ListItem>
              <ListItem
                key={4}
                onClick={() => {
                  navigate(`/a`)
                }}
              >
                <Avatar
                  small
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt="contact profile image"
                />
                <p>Izan Huang</p>
              </ListItem>
              <ListItem
                key={5}
                onClick={() => {
                  navigate(`/a`)
                }}
              >
                <Avatar
                  small
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt="contact profile image"
                />
                <p>Izan Huang</p>
              </ListItem>
              <ListItem
                key={6}
                onClick={() => {
                  navigate(`/a`)
                }}
              >
                <Avatar
                  small
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt="contact profile image"
                />
                <p>Izan Huang</p>
              </ListItem>
              <ListItem
                key={7}
                onClick={() => {
                  navigate(`/a`)
                }}
              >
                <Avatar
                  small
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt="contact profile image"
                />
                <p>Izan Huang</p>
              </ListItem>
              <ListItem
                key={8}
                onClick={() => {
                  navigate(`/a`)
                }}
              >
                <Avatar
                  small
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt="contact profile image"
                />
                <p>Izan Huang</p>
              </ListItem>
              <ListItem
                key={9}
                onClick={() => {
                  navigate(`/a`)
                }}
              >
                <Avatar
                  small
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt="contact profile image"
                />
                <p>Izan Huang</p>
              </ListItem>
            </List>
          )}
      </Nav>
    </Wrapper>
  )
}

export default Contacts
