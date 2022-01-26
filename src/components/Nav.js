import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { NavButton, IconButton } from '../styles/Button'
import { SiFacebook, SiFacebookgaming, SiMessenger } from 'react-icons/si'
import { TiHome } from 'react-icons/ti'
import { BiStore } from 'react-icons/bi'
import { RiGroup2Line } from 'react-icons/ri'
import Dropdown from './Dropdown'

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  background-color: #242526;
  justify-content: space-between;
  padding: 0 15px;
  height: 56px;
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;
  left: 0;
`

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.center &&
    css`
      li {
        box-sizing: border-box;
        margin: 3px 3px 0 3px;
        border-bottom: 3px solid transparent;
      }
      // li:active {
      //   border-bottom: 3px solid #1877f2;
      // }
    `}

  ${(props) =>
    props.settings &&
    css`
      li {
        padding: 5px;
      }
    `}
`

const Nav = () => {
  const [activeNavLink, setActiveNavLink] = useState('')

  const handleClick = (name) => {
    setActiveNavLink(name)
  }

  return (
    <Navbar>
      <Link to="/">
        <SiFacebook className="fb-icon" />
      </Link>

      <List center>
        <li
          className={activeNavLink === 'home' ? 'activeClass' : ''}
          onClick={() => {
            handleClick('home')
          }}
        >
          <Link to="/">
            <NavButton>
              <TiHome />
            </NavButton>
          </Link>
        </li>
        <li
          className={activeNavLink === 'store' ? 'activeClass' : ''}
          onClick={() => {
            handleClick('store')
          }}
        >
          <Link to="/notfound">
            <NavButton>
              <BiStore />
            </NavButton>
          </Link>
        </li>
        <li
          className={activeNavLink === 'group' ? 'activeClass' : ''}
          onClick={() => {
            handleClick('group')
          }}
        >
          <Link to="/notfound">
            <NavButton>
              <RiGroup2Line />
            </NavButton>
          </Link>
        </li>
        <li
          className={activeNavLink === 'gaming' ? 'activeClass' : ''}
          onClick={() => {
            handleClick('gaming')
          }}
        >
          <Link to="/notfound">
            <NavButton gaming>
              <SiFacebookgaming />
            </NavButton>
          </Link>
        </li>
      </List>

      <List settings>
        <li>
          <Link to="/">
            <IconButton>
              <SiMessenger className="smaller-icon" />
            </IconButton>
          </Link>
        </li>
        <li>
          <Dropdown />
        </li>
      </List>
    </Navbar>
  )
}

export default Nav
