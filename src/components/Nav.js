import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { NavButton, IconButton } from '../styles/Button'
import { useAuth } from '../contexts/AuthContext'
import { SiFacebook, SiFacebookgaming, SiMessenger } from 'react-icons/si'
import { TiHome, TiArrowSortedDown } from 'react-icons/ti'
import { BiStore } from 'react-icons/bi'
import { RiGroup2Line } from 'react-icons/ri'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/Dropdown'

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  background-color: #242526;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  height: 56px;
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
      li:active {
        border-bottom: 3px solid #1877f2;
      }
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
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()

  const navigate = useNavigate()

  async function handleLogout() {
    setError('')
    try {
      await logout()
      navigate('/')
    } catch (error) {
      setError('Failed to log out')
    }
  }

  return (
    <Navbar>
      <Link to="/">
        <SiFacebook className="fb-icon" />
      </Link>

      <List center>
        <li>
          <Link to="/">
            <NavButton>
              <TiHome />
            </NavButton>
          </Link>
        </li>
        <li>
          <Link to="#">
            <NavButton>
              <BiStore />
            </NavButton>
          </Link>
        </li>
        <li>
          <Link to="#">
            <NavButton>
              <RiGroup2Line />
            </NavButton>
          </Link>
        </li>
        <li>
          <Link to="#">
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
          <IconButton>
            <TiArrowSortedDown className="smaller-icon" />
          </IconButton>
          {/* <div>
            <IconButton
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <TiArrowSortedDown className="smaller-icon" />
            </IconButton>
            <div class="dropdown-menu dropdown-menu-right">
              <Link to="/update-profile">
                <button class="dropdown-item" type="button">
                  Update Profile
                </button>
              </Link>
              <button
                class="dropdown-item"
                type="button"
                onClick={() => {
                  handleLogout()
                }}
              >
                Log out
              </button>
            </div>
          </div> */}
        </li>
      </List>
    </Navbar>
  )
}

export default Nav
