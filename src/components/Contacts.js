import React from 'react'
import { Wrapper, Nav, List, ImageWrapper } from '../styles/LeftAndRightNav'
import { ListItem } from '../styles/DropDown'

const Contacts = () => {
  return (
    <Wrapper contacts>
      <Nav contacts>
        Contacts
        <List contacts>
          <ListItem>Name</ListItem>
        </List>
      </Nav>
    </Wrapper>
  )
}

export default Contacts
