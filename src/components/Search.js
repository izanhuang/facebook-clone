import React, { useEffect, useState, useRef } from 'react'
import { GoSearch } from 'react-icons/go'
import {
  DropDownContainer,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from '../styles/DropDown'
import { BiArrowBack } from 'react-icons/bi'
import { Wrapper, Label, Input, ArrowButton } from '../styles/SearchBar'
import handleClickOutside from '../utils/ClickOutsideUtil'
import { Avatar } from '../styles/Avatar'
import { useNavigate } from 'react-router-dom'
import { useData } from '../contexts/DataContext'
import { getAllUsers } from '../utils/firebaseUtils'

const Search = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchName, setSearchName] = useState('')
  const { users, setUsers } = useData()

  const wrapperRef = useRef(null)

  const navigate = useNavigate()

  const toggling = () => setIsOpen(!isOpen)
  const responsiveToggle = () => setIsOpen(true)

  useEffect(() => {
    if (isOpen === true) {
      document.addEventListener('mousedown', (event) => {
        handleClickOutside(event, isOpen, setIsOpen, wrapperRef)
      })
    }
  }, [isOpen])

  useEffect(() => {
    getAllUsers(setUsers)
  }, [])

  return (
    <Wrapper ref={wrapperRef}>
      <DropDownContainer>
        <Label searchBar onClick={responsiveToggle}>
          <GoSearch onClick={toggling} />
          <Input placeholder="Search Facebook" value={searchName} readOnly />
        </Label>

        {isOpen && (
          <DropDownListContainer search>
            <DropDownList search>
              <ListItem search>
                <ArrowButton onClick={toggling}>
                  <BiArrowBack />
                </ArrowButton>
                <Label padding dropdownSearchBar>
                  <Input
                    placeholder="Search Facebook"
                    value={searchName}
                    autoFocus
                    onChange={(e) => setSearchName(e.target.value)}
                  />
                </Label>
              </ListItem>
              {searchName !== '' &&
                users
                  .filter((userDetails) =>
                    userDetails.firstName
                      .concat('', userDetails.lastName)
                      .toLowerCase()
                      .includes(searchName.toLowerCase()),
                  )
                  .map((filteredUser, index) => (
                    <ListItem
                      key={index}
                      filtered
                      onClick={() => {
                        toggling()
                        setSearchName('')
                        navigate(`/${filteredUser.userName}`)
                      }}
                    >
                      <Avatar small src={filteredUser.profileImg} />
                      {filteredUser.firstName + ' ' + filteredUser.lastName}
                    </ListItem>
                  ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Wrapper>
  )
}

export default Search
