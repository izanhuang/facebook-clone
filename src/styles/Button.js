import styled, { css } from 'styled-components'

export const Button = styled.button`
  background-color: var(--fb-blue);
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
    background-image: var(--dark-hover);
  }

  ${(props) =>
    props.create &&
    css`
      width: auto;
      background-color: var(--green);
      border-color: var(--green);
      text-align: center;
      font-size: 17px;
    `}

  ${(props) =>
    props.signup &&
    css`
      background-color: var(--green);
      padding: 0 50px;
      width: auto;
      line-height: 32.5px;
      font-size: 18px;
    `}

  ${(props) =>
    props.auto &&
    css`
      width: auto;
      font-size: 16px;
    `}

  ${(props) =>
    props.update &&
    css`
      background-color: #4267b2;
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
    background-image: ${({ theme }) => theme.buttonHover};
  }

  svg {
    fill: ${({ theme }) => theme.secondaryColor};
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
  background-color: ${({ theme }) => theme.iconBg};
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
    background-color: ${({ theme }) => theme.deemphasizedButton};
    svg {
      fill: #4688fe;
    }
    svg path {
      stroke: #4688fe;
    }
  }

  :hover {
    background-image: ${({ theme }) => theme.buttonHover};
  }

  svg {
    fill: ${({ theme }) => theme.text};
    width: 18px;
    height: 18px;
    display: inline-block;
    vertical-align: -0.25em;
  }

  ${(props) =>
    props.small &&
    css`
      width: 36px;
      height: 36px;
      :hover {
        background-image: none;
      }
      :focus {
        background-color: ${({ theme }) => theme.iconBg};
        svg {
          fill: ${({ theme }) => theme.text};
        }
      }
    `}

  ${(props) =>
    props.logOutIcon &&
    css`
      svg {
        padding-left: 4px;
        vertical-align: -0.8em !important;
      }
    `}

  ${(props) =>
    props.margin &&
    css`
      margin: 8px 12px 8px 0;
    `}

  ${(props) =>
    props.addIcon &&
    css`
      @media (min-width: 700px) {
        opacity: 0;
      }

      svg path {
        stroke: ${({ theme }) => theme.text};
      }
    `}

  ${(props) =>
    props.appsIcon &&
    css`
      @media (min-width: 700px) {
        opacity: 0;
      }

      svg {
        width: 23px;
        height: 23px;
      }
    `}
   
`

export const IconButtonSpan = styled.span`
  background-color: ${({ theme }) => theme.iconBg};
  border-radius: 50%;
  border: none;
  color: #050505;
  width: 40px;
  height: 40px;

  cursor: pointer;
  text-align: center;
  text-decoration: none;

  :focus {
    background-color: ${({ theme }) => theme.deemphasizedButton};
    svg {
      fill: #4688fe;
    }
  }

  :hover {
    background-image: ${({ theme }) => theme.buttonHover};
  }

  svg {
    fill: ${({ theme }) => theme.text};
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: -0.85em;
  }

  ${(props) =>
    props.small &&
    css`
      width: 36px;
      height: 36px;
      :hover {
        background-image: none;
      }
      :focus {
        background-color: ${({ theme }) => theme.iconBg};
        svg {
          fill: ${({ theme }) => theme.text};
        }
      }
    `}

  ${(props) =>
    props.margin &&
    css`
      margin: 8px 12px 8px 0;
    `}
`
