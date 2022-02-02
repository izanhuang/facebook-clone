import React from 'react'
import LeftNav from '../components/LeftNav'
import CreateAPost from '../components/CreateAPost'
import {
  Wrapper,
  PagePadding,
  HomeCenterWrapper,
  HomeWrapper,
  CenterElement,
} from '../styles/Wrapper'
import Contacts from '../components/Contacts'

const Home = () => {
  return (
    <Wrapper>
      <PagePadding>
        <HomeWrapper>
          <LeftNav />
          <HomeCenterWrapper>
            <CenterElement>
              <CreateAPost />
            </CenterElement>
          </HomeCenterWrapper>
          <Contacts />
        </HomeWrapper>
      </PagePadding>
    </Wrapper>
  )
}

export default Home
