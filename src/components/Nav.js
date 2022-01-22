import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.nav``

const Nav = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#">Marketplace</Link>
        </li>
        <li>
          <Link to="#">Groups</Link>
        </li>
        <li>
          <Link to="#">Gaming</Link>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Nav
