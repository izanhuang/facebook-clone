import styled, { css } from 'styled-components'

export const Footer = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 1rem;
  left: 0;
  text-align: center;

  ${(props) =>
    props.paddingLeft &&
    css`
      padding-left: 16px;
    `}
`
