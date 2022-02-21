import React, { useEffect } from 'react'
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
import Posts from '../components/Posts'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Wrapper>
      <PagePadding>
        <HomeWrapper>
          <LeftNav />
          <HomeCenterWrapper>
            <CenterElement>
              <CreateAPost />
              <Posts />
            </CenterElement>
          </HomeCenterWrapper>
          <Contacts />
        </HomeWrapper>
      </PagePadding>
    </Wrapper>
  )
}

export default Home
