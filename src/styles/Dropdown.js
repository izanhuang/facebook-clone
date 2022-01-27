import styled, { css } from 'styled-components'

export const DropDownContainer = styled.div`
  width: auto;
  margin: 0 auto;
  position: relative;
  z-index: 2;
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
  // width: 360px;
  //width: 350px on mobile
  // height: 430px;
  width: 225px;
  // height: 220px;
  height: 200px;
  background: ${({ theme }) => theme.bgSecondary};
  box-shadow: ${({ theme }) => theme.shadow};
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16;
  font-weight: 500;

  // &:first-child {
  //   padding-top: 0.8em;
  // }

  > a {
    color: ${({ theme }) => theme.text};
  }

  > a:hover {
    text-decoration: none;
  }
`

export const ListItem = styled.li`
  list-style: none;
  padding: 6px 18px !important;
  min-height: 44px;
  margin-bottom: 0.5em;
  // margin-bottom: 0.8em;
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    background-image: ${({ theme }) => theme.buttonHover};
  }
`
