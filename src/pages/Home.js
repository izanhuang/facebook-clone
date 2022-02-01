import React from 'react'
import LeftNav from '../components/LeftNav'
import Stories from '../components/Stories'
import {
  Wrapper,
  PagePadding,
  HomeCenterWrapper,
  HomeWrapper,
} from '../styles/Wrapper'
import Contacts from '../components/Contacts'

const Home = () => {
  return (
    <Wrapper>
      <PagePadding>
        <HomeWrapper>
          <LeftNav />
          <HomeCenterWrapper>
            <Stories />
          </HomeCenterWrapper>
          <Contacts />
        </HomeWrapper>
      </PagePadding>
    </Wrapper>
  )
}

export default Home
