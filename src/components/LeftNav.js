import React from 'react'
import { Footer } from '../styles/Footer'
import { SecondaryText } from '../styles/Text'
import { ListItem } from '../styles/DropDown'
import { useAuth } from '../contexts/AuthContext'
import { Avatar } from '../styles/Avatar'
import { useNavigate } from 'react-router-dom'
import { Wrapper, Nav, List, ImageWrapper } from '../styles/LeftAndRightNav'

const LeftNav = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  return (
    <Wrapper leftNav>
      <Nav>
        <List>
          <ListItem
            onClick={() => {
              navigate(`/${user.userName}`)
            }}
          >
            <Avatar small src={user.profileImg} alt="current profile image" />
            {user.firstName + ' ' + user.lastName}
          </ListItem>
          <ListItem
            onClick={() => {
              navigate('/friends')
            }}
          >
            <ImageWrapper>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
                alt="friends icon"
              />
            </ImageWrapper>
            Friends
          </ListItem>
          <ListItem
            onClick={() => {
              navigate('/groups')
            }}
          >
            <ImageWrapper>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
                alt="groups icon"
              />
            </ImageWrapper>
            Groups
          </ListItem>
          <ListItem
            onClick={() => {
              navigate('/marketplace')
            }}
          >
            <ImageWrapper>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png"
                alt="marketplace icon"
              />
            </ImageWrapper>
            Marketplace
          </ListItem>
        </List>
        <Footer>
          <SecondaryText size12 noMargin paddingLeft>
            Facebook Clone 2022. Built by Izan Huang. Inspired by Facebook.
          </SecondaryText>
        </Footer>
      </Nav>
    </Wrapper>
  )
}

export default LeftNav
