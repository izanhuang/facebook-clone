import styled, { css } from 'styled-components'

export const Button = styled.button`
  background-color: #1877f2;
  border-radius: 6px;
  font-size: 20px;
  line-height: 40px;
  padding: 0 16px;
  width: 100%;
  color: #fff;
  margin: 6px 0;
  cursor: pointer;
  border: 1px solid transparent;

  :hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
  }

  ${(props) =>
    props.create &&
    css`
      width: auto;
      background-color: #36a420;
      border-color: #36a420;
      text-align: center;
      font-size: 17px;
    `}

  ${(props) =>
    props.signup &&
    css`
      background-color: #36a420;
      padding: 0 50px;
      width: auto;
      line-height: 32.5px;
      font-size: 18px;
    `}
`

export const NavButton = styled.button`
  background-color: transparent;
  border-radius: 6px;
  border: none;
  width: 8vw;
  max-width: 130px;
  height: 50px;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  :hover {
    background-image: linear-gradient(rgba(255, 255, 255, 0.1) 0 0);
  }

  svg {
    fill: #e4e6eb;
    width: 2.25em;
    height: 2.25em;
    vertical-align: -0.3em;
  }
  ${(props) =>
    props.gaming &&
    css`
      svg {
        width: 1.75em;
        height: 1.75em;
      }
    `}
`

export const IconButton = styled.button`
  // background-color: #e4e6eb;
  background-color: #3a3b3c;
  border-radius: 50%;
  border: none;
  color: #050505;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  :focus {
    background-color: #2b3951;
    svg {
      fill: #4688fe;
    }
  }

  :hover {
    background-image: linear-gradient(rgba(255, 255, 255, 0.1) 0 0);
  }

  svg {
    // fill: #050505;
    fill: #e4e6eb;
    width: 1.25em;
    height: 1.25em;
    display: inline-block;
    vertical-align: -0.25em;
  }
`
