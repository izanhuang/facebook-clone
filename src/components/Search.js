import React, { useEffect, useState } from 'react'
import { GoSearch } from 'react-icons/go'
import {
  DropDownContainer,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from '../styles/DropDown'
import { BiArrowBack } from 'react-icons/bi'
import { Wrapper, Label, Input, ArrowButton } from '../styles/SearchBar'

const Search = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggling = () => setIsOpen(!isOpen)
  const responsiveToggle = () => setIsOpen(true)

  useEffect(() => {
    console.log('open ', isOpen)
  }, [isOpen])

  return (
    <Wrapper>
      <DropDownContainer>
        <Label searchBar onClick={responsiveToggle}>
          <GoSearch onClick={toggling} />
          <Input placeholder="Search Facebook" />
        </Label>

        {isOpen && (
          <DropDownListContainer search>
            <DropDownList search>
              <ListItem search>
                <ArrowButton onClick={toggling}>
                  <BiArrowBack />
                </ArrowButton>
                <Label padding dropdownSearchBar>
                  <Input placeholder="Search Facebook" />
                </Label>
              </ListItem>
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Wrapper>
  )
}

export default Search
