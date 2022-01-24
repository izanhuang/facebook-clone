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

  ${(props) =>
    props.signup &&
    css`
      font-size: 15px;
      height: 20px;
      padding: 11px;
      border-color: #ccd0d5;
      max-width: 375px;
      width: 21.3rem;
    `}

  ${(props) =>
    props.name &&
    css`
      max-width: 170px;
      width: 9.5rem;
    `}
   

  ${(props) =>
    props.radio &&
    css`
      width: auto;
      height: 100%;
      margin: 0 !important;
    `}
`
