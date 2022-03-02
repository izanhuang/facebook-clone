import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  position: relative;

  ${(props) =>
    props.auth &&
    css`
      padding-top: 0;
      background-color: #f0f2f5;
    `}
`
export const PagePadding = styled.div`
  padding-top: 56px;
`

export const HomeCenterWrapper = styled.div`
  width: 64vw;
  // min-height: 100vh;
  height: auto;
  padding: 0px 20px 0;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  justifiy-content: space-between;
  align-content: flex-start;

  @media (max-width: 700px) {
    width: 100%;
    padding: 0;
  }
`
export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 900px) {
    justify-content: center;
  }

  ${(props) =>
    props.createPost &&
    css`
      padding: 16px 16px 0;
      #imgInput {
        display: none;
      }
      > li {
        width: 100%;
        color: ${({ theme }) => theme.secondaryColor};
        align-items: center;
        justify-content: center;

        > svg {
          width: 23px;
          height: 23px;
          margin: 0 8px 0 0;
        }
      }
    `}
`

export const BlockWrapper = styled.div`
  display: block;
  width: 100%;
`

export const AuthWrapper = styled.div`
  height: auto;
  width: 100%;
  position: relative;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 415px) {
    padding: 40px 0;
  }
`

export const ContentWrapper = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  max-width: 980px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.noPadding &&
    css`
      padding: 0;
    `}
`
export const CenterElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 16px;

  ${(props) =>
    props.padding &&
    css`
      a {
        padding: 10px 0 2px;
      }
    `}

  ${(props) =>
    props.createPostDivider &&
    css`
      height: 60px;
      border-bottom: 1px solid ${({ theme }) => theme.divider};
    `}

  ${(props) =>
    props.profileHeader &&
    css`
      background-color: #fff;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      background-color: ${({ theme }) => theme.bgSecondary};
    `}
`

export const FlexRightAlign = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  width: 100%;
`

export const RadioWrapper = styled.div`
  box-sizing: border-box;
  border-radius: 4px;
  color: #1c1e21;
  padding: 0 8px;
  padding-right: 20px;
  width: 125px;
  height: 36px;
  border: 1px solid #ccd0d5;
  position: relative;

  label {
    font-family: SFProText-Medium, Helvetica, Arial, sans-serif;
    padding: 0 2px 1px;
    font-size: 15px;
    font-weight: normal;
    line-height: 36px;
  }

  input {
    float: right;
    position: absolute;
    top: 0;
    right: 9px;
  }

  @media (max-width: 415px) {
    width: 100px;
  }
`

export const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const CreatePostWrapper = styled.div`
  padding: 16px;
`
