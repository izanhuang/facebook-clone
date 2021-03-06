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

  ${({ disabled }) =>
    disabled &&
    css`
      background: ${({ theme }) => theme.iconBg};
      color: ${({ theme }) => theme.secondaryIcon};
      background: ${({ theme }) => theme.disabled};

      :hover {
        background: ${({ theme }) => theme.disabled};
        cursor: not-allowed;
      }
    `}

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
      line-height: 35px;
      padding: 0 20px;
    `}

  ${(props) =>
    props.standard &&
    css`
      line-height: 35px;
      width: 90px;
      padding: 0;
      // padding: 0 20px;
      height: 36px;
    `}

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}

  ${(props) =>
    props.gray &&
    css`
      background-color: #f0f2f5;
      color: #65676b;
      :hover {
        background-image: none;
      }
    `}

  ${(props) =>
    props.post &&
    css`
      font-size: 15px;
      margin: 0;
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
    props.news &&
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
        cursor: default;
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
        cursor: default;
      }

      svg {
        width: 23px;
        height: 23px;
      }
    `}

  ${(props) =>
    props.close &&
    css`
      position: absolute;
      top: 10px;
      right: 15px;

      svg {
        width: 20px;
        height: 20px;
      }

      svg path {
        stroke: ${({ theme }) => theme.secondaryIcon};
      }

      :focus {
        background-color: ${({ theme }) => theme.iconBg};
        svg path {
          stroke: ${({ theme }) => theme.text};
        }
      }
    `}

  ${(props) =>
    props.remove &&
    css`
      position: absolute;
      top: 7px;
      left: 7px;
      width: 30px;
      height: 30px;
      background-color: ${({ theme }) => theme.background};

      svg {
        width: 15px;
        height: 15px;
      }

      svg path {
        stroke: ${({ theme }) => theme.secondaryIcon};
        stroke-width: 3px;
      }

      :focus {
        background-color: ${({ theme }) => theme.iconBg};
      }
    `}

    ${(props) =>
      props.bgOnHover &&
      css`
        background-color: transparent;

        svg {
          fill: ${({ theme }) => theme.secondaryColor};
          width: 24px;
          height: 24px;
        }

        :focus {
          background-color: transparent;
          svg {
            fill: ${({ theme }) => theme.secondaryColor};
          }
        }

        :hover {
          background-color: ${({ theme }) => theme.hoverOverlay};
        }
      `}
   

    ${(props) =>
      props.noBg &&
      css`
        background-color: transparent;

        svg {
          width: 24px;
          height: 24px;
        }

        :focus {
          background-color: transparent;
        }

        :hover {
          background-color: transparent;
        }
      `}

    ${(props) =>
      props.noPadding &&
      css`
        padding: 0;
        margin: 0 6px 0 0;
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

export const CreatePostButton = styled.button`
  background-color: ${({ theme }) => theme.iconBg};
  color: ${({ theme }) => theme.secondaryColor};
  border-radius: 100px;
  border: none;
  width: 511px;
  height: auto;
  min-height: 40px;
  max-height: 50px;
  cursor: pointer;
  text-align: left;
  padding: 8px 12px;
  font-size: 17px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  :hover {
    background-image: ${({ theme }) => theme.buttonHover};
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const SecondaryButton = styled.button`
  margin: 0;
  width: auto;
  height: 36px;
  padding: 0 12px;
  border: none;
  font-size: 15px;
  font-weight: 600;
  border-radius: 6px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.iconBg};
`

export const ActiveButton = styled.button`
  margin: 0;
  width: auto;
  height: 36px;
  padding: 0 16px;
  border: none;
  font-size: 15px;
  font-weight: 600;
  border-radius: 6px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
  background-color: #1b74e4;

  ${({ disabled }) =>
    disabled &&
    css`
      background: ${({ theme }) => theme.iconBg};
      color: ${({ theme }) => theme.secondaryIcon};
      background: ${({ theme }) => theme.disabled};

      :hover {
        background: ${({ theme }) => theme.disabled};
        cursor: not-allowed;
      }
    `}
`
