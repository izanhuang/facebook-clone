import styled, { css } from 'styled-components'

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-wrap: nowrap;
`

export const PostCard = styled.div`
  width: 591px;
  height: auto;
  padding: 12px 16px 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.bgSecondary};
  color: ${({ theme }) => theme.text};
  // display: flex;
  // flex-direction: column;
  border-radius: 10px;
  box-sizing: border-box;

  @media (max-width: 700px) {
    min-width: 22rem;
    width: 100%;
  }

  ${(props) =>
    props.post &&
    css`
      padding: 0;
    `}
`

export const CreatePostContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`
export const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px 0 16px;
  font-size: 1.5rem;
  resize: none;
  font-family: inherit;
  border: none;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  background-color: transparent;
  color: ${({ theme }) => theme.text};

  @media (max-width: 585px) {
    height: 6rem;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.secondaryIcon};
  }

  :focus {
    border: none;
    outline: none;
  }

  :focus::placeholder,
  :focus ::-webkit-input-placeholder {
    color: lightgray;
  }
`

export const PostImageContainer = styled.div`
  margin: 16px 16px 0;
  width: auto;
  height: 300px;
  position: relative;

  @media (max-width: 585px) {
    width: auto;
    height: 200px;
  }

  ${(props) =>
    props.postCard &&
    css`
      margin: 0px;
    `}
`

export const PostImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 6px;

  ${(props) =>
    props.post &&
    css`
      border-radius: 0;
      width: 100%;
      height: auto;
    `}
`
export const PostCardHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
  padding: 12px 16px 0px;
`

export const PostCardHeaderLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: auto;
  width: 85%;

  > p {
    margin: 0;
  }

  .name {
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
  }

  .name:hover {
    text-decoration: underline;
  }
`
export const PostCardText = styled.div`
  padding: 4px 16px 16px;
`

export const PostCardStats = styled.div`
  margin: 0 16px;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.divider};
  display: flex;
  flex-direction: row;
  width: auto;

  > p {
    margin: 0;
    font-size: 15px;
    margin-left: 7px;
  }

  > .likes {
    flex-grow: 4;
    flex-shrink: 0;
    margin: 0;
    padding-left: 6px;
  }

  > img {
    width: 18px;
    height: 18px;
    transform: translateY(8%);
  }
`
export const PostCardActions = styled.div`
  margin: 0 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;

  > li {
    width: 33%;
    min-height: 32px;
    justify-content: center;
    margin: 5px 0;
  }

  > li svg {
    fill: ${({ theme }) => theme.secondaryColor};
  }

  .like,
  .liked {
    width: 21px;
    height: 21px;
  }

  .liked {
    fill: #1877f2;
    color: #1877f2;
  }

  .comment {
    width: 17px;
    height: 17px;
  }

  .share {
    width: 23px;
    height: 23px;
    transform: scale(-1, 1);
  }

  > li p {
    margin: 0;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    margin-left: 7px;
  }
`
