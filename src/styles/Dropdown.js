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

  ${(props) =>
    props.search &&
    css`
      top: -10px;
      // right: -5px;
      left: -60px;
    `}
`

export const DropDownList = styled.ul`
  padding: 8px;
  margin: 0;
  // width: 360px;
  //width: 350px on mobile
  // height: 430px;
  width: 275px;
  // height: 220px;
  height: auto;
  background: ${({ theme }) => theme.bgSecondary};
  box-shadow: ${({ theme }) => theme.shadow};
  border: none;
  border-radius: 5px;
  box-sizing: border-box;

  // &:first-child {
  //   padding-top: 0.8em;
  // }

  > a {
    color: ${({ theme }) => theme.text};
  }

  > a:hover {
    text-decoration: none;
  }

  ${(props) =>
    props.search &&
    css`
      width: 300px;
    `}
`

export const ListItem = styled.li`
  list-style: none;
  padding: 4px 8px !important;
  min-height: 44px;
  margin-bottom: 0.5em;
  // margin-bottom: 0.8em;
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 500;

  :hover {
    background-image: ${({ theme }) => theme.buttonHover};
  }

  ${(props) =>
    props.profile &&
    css`
      height: 60px;
    `}

  ${(props) =>
    props.noMarginBottom &&
    css`
      margin-bottom: 0;
    `}

  ${(props) =>
    props.flexRow &&
    css`
      display: flex;
      flex-direction: row;
    `}

  ${(props) =>
    props.search &&
    css`
      padding: 0px !important;
      margin: 0;
      cursor: default;
      :hover {
        background-image: none;
      }
    `}
`

export const ActiveIconButton = styled.div`
  button {
    background-color: ${({ theme }) => theme.deemphasizedButton};
  }
  svg {
    fill: #4688fe !important;
  }
`

export const ViewProfile = styled.div`
  display: flex;
  flex-direction: column;
  // padding: 12px 0;

  > h4,
  p {
    margin: 0;
  }
`
