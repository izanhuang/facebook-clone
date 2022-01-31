import styled, { css } from 'styled-components'

export const Form = styled.form`
  padding: 16px;

  ${(props) =>
    props.login &&
    css`
      padding: 0px 16px 16px 16px;
    `}
`

export const FormHeader = styled.div`
  padding: 10px 16px;

  h2,
  h4,
  p {
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
    color: #000;
  }

  h4 {
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    color: #000;
  }

  ${(props) =>
    props.padding &&
    css`
      padding: 24px 0 16px 0;
    `}

  ${(props) =>
    props.divider &&
    css`
      border-bottom: 1px solid #dadde1;
    `}
`
