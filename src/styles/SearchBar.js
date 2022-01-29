import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 60px;
`

export const Label = styled.label`
  border-radius: 50px;
  border: none;
  min-height: 40px;
  //   width: 100%;
  background-color: ${({ theme }) => theme.commentBg};
  outline: none;
  font-weight: 600;
  vertical-align: middle;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 237px;
  opacity: 1;

  svg {
    padding-left: 12px;
    width: 17px;
    height: 17px;
    fill: ${({ theme }) => theme.secondaryColor};
  }

  ${(props) =>
    props.searchBar &&
    css`
      @media (max-width: 1260px) {
        width: 40px;
        svg {
          padding-left: 12px;
          width: 2.5rem;
          height: 2.5rem;
        }
        input {
          opacity: 0;
          padding: 0;
          font-size: 0;
        }
      }
    `}
 

  ${(props) =>
    props.padding &&
    css`
      padding-left: 8px;
    `}

  ${(props) =>
    props.dropdownSearchBar &&
    css`
      width: 100% !important;
    `}
`

export const Input = styled.input`
  border-radius: 50px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 7px 8px 9px 8px;
  width: 100%;
  font-size: 15px;

  :focus,
  :active {
    border: none;
    outline: none;
    color: ${({ theme }) => theme.text};
  }
`

export const ArrowButton = styled.button`
  border-radius: 50%;
  width: 36px;
  height: 34px;
  margin-right: 5px;
  background-color: transparent;
  cursor: pointer;
  //   border: none;
  border: 1px solid transparent;

  :hover {
    background-image: ${({ theme }) => theme.buttonHover};
  }

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.secondaryColor};
    // vertical-align: -0.5em;
    // margin-left: 3.5px;
  }
`
