import React from 'react'
import styled, { css } from 'styled-components'

export const Card = styled.div`
  width: 396px;
  width: 22rem;
  align-items: center;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  box-sizing: border-box;
  margin-top: 5px;

  @media (max-width: 415px) {
    width: 22rem;
  }

  ${(props) =>
    props.signup &&
    css`
      width: 432px;
    `}

  ${(props) =>
    props.toggle &&
    css`
      background-color: ${({ theme }) => theme.bgSecondary};
    `}
`
