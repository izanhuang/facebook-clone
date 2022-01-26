import styled from 'styled-components'

export const DropDownContainer = styled.div`
  width: auto;
  margin: 0 auto;
  position: relative;
`

// export const DropDownHeader = styled.div`
//   margin-bottom: 0.8em;
//   padding: 0.1em;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
//   font-weight: 500;
//   font-size: 1.3rem;
//   color: #3faffa;
//   background: transparent;
// `

export const DropDownListContainer = styled.div`
  position: absolute;
  top: 45px;
  right: 0;
`

export const DropDownList = styled.ul`
  padding: 8px;
  margin: 0;
  width: 360px;
  //width: 350px on mobile
  height: 430px;
  background: #242526;
  border: 1px solid var(--divider);
  border-radius: 5px;
  box-sizing: border-box;
  color: var(--primary-text);
  font-size: 16;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }

  > a {
    color: var(--primary-text);
  }

  > a:hover {
    text-decoration: none;
  }
`

export const ListItem = styled.li`
  list-style: none;
  padding: 6px;
  min-height: 44px;
  margin-bottom: 0.8em;
  cursor: pointer;
  border-radius: 6px;

  :hover {
    background-image: var(--light-hover);
  }
`
