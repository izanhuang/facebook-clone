import React from 'react'
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
