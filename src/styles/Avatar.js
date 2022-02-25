import styled, { css } from 'styled-components'

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin: 12px 12px 12px 0;
  cursor: pointer;

  ${(props) =>
    props.large &&
    css`
      width: 168px;
      height: 168px;
    `}

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

  ${(props) =>
    props.tiny &&
    css`
      width: 32px;
      height: 32px;
    `}

  ${(props) =>
    props.lessMargin &&
    css`
      margin: 2px 6px 0 0;
    `}

    ${(props) =>
      props.noPointer &&
      css`
        cursor: auto;
      `}

    ${(props) =>
      props.boxed &&
      css`
        border-radius: 8px;
        width: 100%;
        height: auto;
        margin: 0;
        min-width: 101.98px;
        min-height: 101.98px;

        @media (max-width: 925px) {
          min-width: 148.66px;
          min-height: 148.66px;
        }

        @media (max-width: 535px) {
          min-width: 132.33px;
          min-height: 132.33px;
        }

        @media (max-width: 375px) {
          min-width: 96.33px;
          min-height: 96.33px;
        }
      `}
`

export const AvatarOutline = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bgSecondary};
  padding: 4px;
  height: 168px;
  width: 168px;

  > img {
    margin: 0;
  }
`
