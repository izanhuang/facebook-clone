import styled from 'styled-components'

export const ProfileHeader = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 940px;
  width: 100%;

  h1 {
    margin: 8px 0;
  }
`

export const ProfileNavContainer = styled.div`
  max-width: 908px;
  width: 100%;
  box-sizing: border-box;
  height: 60px;
  padding: 0 16px;
`

export const ProfileNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 12px 0;

  > button {
    margin: 0 4px;
    width: auto;
    height: 36px;
    padding: 0 12px;
    border: none;
    font-size: 15px;
    font-weight: 600;
    border-radius: 6px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  :last-child button {
    margin-right: 0px;
  }

  > button:hover {
    background-image: ${({ theme }) => theme.buttonHover};
  }

  > button img {
    height: 16px;
    width: 16px;
    margin: 0 3px;
  }

  > button span {
    margin: 0 3px;
  }

  .actionButton {
    color: #fff;
    background-color: #1b74e4;

    > img {
      -webkit-filter: invert(100%);
    }
  }

  .secondaryButton {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.iconBg};

    > img {
      -webkit-filter: ${({ theme }) => theme.invert};
    }
  }
`

export const ProfileContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  // max-width: 892px;
  margin: 16px 0;
  padding: 0 16px;

  @media (max-width: 925px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`
export const LeftContainer = styled.div`
  > div {
    width: 360px;
    box-sizing: border-box;
    margin: 0 8px 16px;
  }

  @media (max-width: 925px) {
    > div {
      width: 500px;
    }
  }

  @media (max-width: 535px) {
    > div {
      width: 451px;
    }
  }

  @media (max-width: 375px) {
    > div {
      width: auto;
    }
  }
`

export const IconTextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 16px;

  p {
    margin: 0;
    padding: 6px;
  }

  img {
    width: 20px;
    height: 20px;
    padding: 6px;
    -webkit-filter: var(--placeholder-icon);
  }
`

export const RightContainer = styled.div`
  > div {
    width: 500px;
    box-sizing: border-box;
    margin: 0 8px 16px;
  }

  @media (max-width: 925px) {
    > div {
      width: 500px;
    }
  }

  @media (max-width: 535px) {
    > div {
      width: 451px;
    }
  }

  @media (max-width: 375px) {
    > div {
      width: auto;
    }
  }
`

export const EditProfileContent = styled.div`
  display: flex;
  flex-direction: column;

  .center {
    align-self: center;
    padding: 16px 16px 0 16px;
  }
`

export const EditProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 16px 4px;

  a {
    cursor: pointer;
  }
`

export const EditProfileFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 4px 16px 16px 0;
`
