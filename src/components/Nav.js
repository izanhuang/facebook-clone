import React from 'react'
import styled, { css } from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { NavButton } from '../styles/Button'
import { SiFacebook } from 'react-icons/si'
import { TiHome } from 'react-icons/ti'
import { BiStore } from 'react-icons/bi'
import { RiGroup2Line } from 'react-icons/ri'
import { IoNewspaper } from 'react-icons/io5'
import OptionsDropdown from './Dropdown/OptionsDropdown'
import Search from './Search'
import CreateDropdown from './Dropdown/CreateDropdown'
import AppsDropdown from './Dropdown/AppsDropdown'
import MessagesDropdown from './Dropdown/MessagesDropdown'

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.bgSecondary};
  justify-content: center;
  padding: 0 0 !important;
  height: 56px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  box-shadow: 0 -2px 4px 0px ${({ theme }) => theme.text};
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
      @media (max-width: 700px) {
        opacity: 0;
      }
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
      position: absolute;
      top: 0;
      right: 15px;
      z-index: 2;
      li {
        padding: 5px;
      }
    `}
`

const Logo = styled.div`
  position: absolute;
  top: 10px;
  left: 15px;
  svg {
    fill: ${({ theme }) => theme.logo};
    width: 2.5em;
    height: 2.5em;
  }
`

const Nav = () => {
  const location = useLocation()

  return (
    <Navbar>
      <Link to="/">
        <Logo>
          <SiFacebook />
        </Logo>
      </Link>

      <Search />

      <List center>
        <li className={location.pathname === '/' ? 'activeClass' : ''}>
          <Link to="/">
            <NavButton>
              <TiHome />
            </NavButton>
          </Link>
        </li>
        <li
          className={location.pathname === '/marketplace' ? 'activeClass' : ''}
        >
          <Link to="/marketplace">
            <NavButton>
              <BiStore />
            </NavButton>
          </Link>
        </li>
        <li className={location.pathname === '/group' ? 'activeClass' : ''}>
          <Link to="/group">
            <NavButton>
              <RiGroup2Line />
            </NavButton>
          </Link>
        </li>
        <li className={location.pathname === '/news' ? 'activeClass' : ''}>
          <Link to="/news">
            <NavButton news>
              <IoNewspaper />
            </NavButton>
          </Link>
        </li>
      </List>

      <List settings>
        <li>
          <CreateDropdown />
        </li>
        <li>
          <AppsDropdown />
        </li>
        <li>
          <MessagesDropdown />
        </li>
        <li>
          <OptionsDropdown />
        </li>
      </List>
    </Navbar>
  )
}

export default Nav
