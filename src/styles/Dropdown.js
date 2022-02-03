import styled, { css } from 'styled-components'

export const DropDownContainer = styled.div`
  width: auto;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`

export const DropDownHeader = styled.div`
  // margin-bottom: 0.8em;
  padding: 4px 8px 8px;
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.text};

  ${(props) =>
    props.noPaddingLeft &&
    css`
      padding-left: 0;
    `}

  ${(props) =>
    props.fontSize17 &&
    css`
      font-size: 17px;
    `}

  ${(props) =>
    props.padding &&
    css`
      padding: 16px 0 4px 8px;
    `}
`

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

  ${(props) =>
    props.create &&
    css`
      right: -150px;

      @media (min-width: 700px) {
        opacity: 0;
    `}

  ${(props) =>
    props.apps &&
    css`
      right: -100px;

      @media (min-width: 700px) {
        opacity: 0;
      }
    `}

  ${(props) =>
    props.messages &&
    css`
      right: -50px;
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
      max-height: 310px;
      overflow-y: auto;
    `}

  ${(props) =>
    props.apps &&
    css`
      // width: 225px;
    `}

  ${(props) =>
    props.messages &&
    css`
      width: 360px;
    `}
`

export const ListItem = styled.li`
  list-style: none;
  padding: 0px 8px !important;
  min-height: 44px;
  margin-bottom: 0.5em;
  // margin-bottom: 0.8em;
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 15px;
  font-weight: 500;

  :hover {
    background-color: ${({ theme }) => theme.hoverOverlay};
  }

  ${(props) =>
    props.viewProfile &&
    css`
      height: 65px;
    `}

  ${(props) =>
    props.noMarginBottom &&
    css`
      margin-bottom: 0;
    `}

  ${(props) =>
    props.flexRow &&
    css`
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
        background-color: transparent;
      }
    `}

  ${(props) =>
    props.createPost &&
    css`
      cursor: default;
      padding: 0px 16px !important;
      :hover {
        background-image: none;
        background-color: transparent;
      }
    `}

  ${(props) =>
    props.filtered &&
    css`
      font-weight: 400;
      margin-top: 0.5em;
      margin-bottom: 0;
      height: 55px;
    `}

    ${(props) =>
      props.photo &&
      css`
        > svg {
          fill: var(--lime);
        }
      `}

    ${(props) =>
      props.feeling &&
      css`
        > svg {
          fill: var(--lemon);
        }
      `}

    ${(props) =>
      props.gif &&
      css`
        > svg {
          fill: var(--purple);
          width: 25.5px !important;
          height: 25.5px !important;
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
  svg path {
    stroke: #4688fe !important;
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
export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 0;

  > span {
    font-weight: 400;
  }
`
