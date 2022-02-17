import styled, { css } from 'styled-components'

export const DisplayText = styled.span`
  font-size: 17px;
`

export const SecondaryText = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.secondaryColor};
  font-weight: 400;

  ${(props) =>
    props.size12 &&
    css`
      font-size: 12px;
      color: #777;
      line-height: 1.34;
    `}
  ${(props) =>
    props.size11 &&
    css`
      font-size: 11px;
      color: #777;
      line-height: 1.34;
    `}

    ${(props) =>
      props.noMargin &&
      css`
        margin: 0 !important;
      `}

    ${(props) =>
      props.paddingLeft &&
      css`
        padding-left: 16px;
        text-align: left;
      `}

    ${(props) =>
      props.viewComments &&
      css`
        font-weight: 600;
        font-size: 15px;
        padding: 4px 16px 12px;
        margin: 0;
      `}
`

export const ErrorMessage = styled.p`
  margin-top: 0;
  color: var(--red);
  font-size: 14px;
`
