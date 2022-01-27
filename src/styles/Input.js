import React from 'react'
import styled, { css } from 'styled-components'

export const Input = styled.input`
  font-size: 17px;
  padding: 14px 16px;
  max-width: 330px;
  width: 18rem;
  border: 1px solid #dddfe2;
  color: #1c1e21;
  height: 22px;
  line-height: 16px;
  display: inline-block;
  border-radius: 6px;
  margin: 6px 0;

  // :focus {
  //   outline: none !important;
  //   border: 1px solid #3676f1;
  //   box-shadow: 0 0 3px #719ece;
  // }

  :focus {
    outline: none !important;
    border: 1px solid #dddfe2;
    box-shadow: none !important;
  }

  @media (max-width: 415px) {
    width: 18.5rem;
  
  }

  ${(props) =>
    props.signup &&
    css`
      font-size: 15px;
      height: 20px;
      padding: 11px;
      border-color: #ccd0d5;
      max-width: 375px;
      width: 25rem;
    `}

 ${(props) =>
   props.radio &&
   css`
     width: auto !important;
     height: 100%;
     margin: 0 !important;
   `}

  ${(props) =>
    props.user_name &&
    css`
      width: 170px;

      @media (max-width: 415px) {
        width: 8rem;
      }
    `}

    ${(props) =>
      props.toggle &&
      css`
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        border: 1px solid ${({ theme }) => theme.bgSecondary};
      `}

 
`
