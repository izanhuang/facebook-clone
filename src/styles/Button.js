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

  ${(props) =>
    props.signup &&
    css`
      width: auto;
      background-color: #36a420;
      border-color: #36a420;
      text-align: center;
      font-size: 17px;
    `}
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
