import React, { useEffect, useState, useRef } from 'react'
import {
  DropDownContainer,
  DropDownListContainer,
  DropDownList,
  DropDownHeader,
  ListItem,
  ActiveIconButton,
} from '../../styles/DropDown'
import { IconButton } from '../../styles/Button'
import { IoApps } from 'react-icons/io5'
import handleClickOutside from '../../utils/ClickOutsideUtil'
import { IoNewspaper } from 'react-icons/io5'
import { TiHome } from 'react-icons/ti'
import { BiStore } from 'react-icons/bi'
import { RiGroup2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const AppsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggling = () => setIsOpen(!isOpen)
  const wrapperRef = useRef(null)

  useEffect(() => {
    if (isOpen === true) {
      document.addEventListener('mousedown', (event) => {
        handleClickOutside(event, isOpen, setIsOpen, wrapperRef)
      })
    }
  }, [isOpen])

  return (
    <DropDownContainer ref={wrapperRef}>
      {isOpen ? (
        <ActiveIconButton>
          <IconButton appsIcon onClick={toggling}>
            <IoApps />
          </IconButton>
        </ActiveIconButton>
      ) : (
        <IconButton appsIcon onClick={toggling}>
          <IoApps />
        </IconButton>
      )}

      {isOpen && (
        <DropDownListContainer apps>
          <DropDownList apps>
            <DropDownHeader>Menu</DropDownHeader>
            <Link to="/">
              <ListItem onClick={toggling} flexRow>
                <IconButton small margin appsIcon>
                  <TiHome />
                </IconButton>
                <span>Home</span>
              </ListItem>
            </Link>
            <Link to="/marketplace">
              <ListItem onClick={toggling} flexRow>
                <IconButton small margin appsIcon>
                  <BiStore />
                </IconButton>
                <span>Marketplace</span>
              </ListItem>
            </Link>
            <Link to="/group">
              <ListItem onClick={toggling} flexRow>
                <IconButton small margin appsIcon>
                  <RiGroup2Line />
                </IconButton>
                <span>Group</span>
              </ListItem>
            </Link>
            <Link to="/news">
              <ListItem onClick={toggling} noMarginBottom flexRow>
                <IconButton small margin>
                  <IoNewspaper />
                </IconButton>
                <span>News</span>
              </ListItem>
            </Link>
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}
export default AppsDropdown
