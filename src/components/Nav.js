import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { NavButton, IconButton } from '../styles/Button'
import { SiFacebook, SiFacebookgaming, SiMessenger } from 'react-icons/si'
import { TiHome } from 'react-icons/ti'
import { BiStore } from 'react-icons/bi'
import { RiGroup2Line } from 'react-icons/ri'
import Dropdown from './Dropdown'

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.bgSecondary};
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

const Logo = styled.div`
  svg {
    fill: ${({ theme }) => theme.logo};
    width: 2.5em;
    height: 2.5em;
    position: absolute;
    top: 10px;
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

      <List center>
        <li className={location.pathname === '/' ? 'activeClass' : ''}>
          <Link to="/">
            <NavButton>
              <TiHome />
            </NavButton>
          </Link>
        </li>
        <li className={location.pathname === '/store' ? 'activeClass' : ''}>
          <Link to="/store">
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
        <li className={location.pathname === '/gaming' ? 'activeClass' : ''}>
          <Link to="/gaming">
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
              <SiMessenger />
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
