import styled, { css } from 'styled-components'

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin: 12px 12px 12px 0;

  ${(props) =>
    props.small &&
    css`
      width: 40px;
      height: 40px;
    `}

  ${(props) =>
    props.marginRight8 &&
    css`
      margin: 0 8px 0 0;
    `}
`
