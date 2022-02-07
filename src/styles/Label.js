import styled, { css } from 'styled-components'

export const Label = styled.label`
  color: #606770;
  font-family: SFProText-Medium, Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: normal;
  line-height: 20px;
  margin-top: 2px;
  display: block;

  ${(props) =>
    props.bold &&
    css`
      font-weight: 600;
    `}

  ${(props) =>
    props.marginTop &&
    css`
      margin-top: 10px;
    `}

  ${(props) =>
    props.fontSize12 &&
    css`
      font-size: 12px;
    `}
`
