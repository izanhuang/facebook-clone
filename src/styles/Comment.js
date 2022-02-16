import styled from 'styled-components'

export const PostComments = styled.div`
  > div:first-child {
    padding-top: 0;
  }
  > div:last-child {
    margin-bottom: 4px;
  }
`

export const CreateComment = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  padding: 4px 16px;
  margin: 4px 0;

  > input,
  textarea {
    overflow: hidden;
    resize: none;
    font-family: inherit;
    height: 100%;
    width: 100%;
    padding: 8px 12px;
    box-sizing: border-box;
    border-radius: 18px;
    background-color: ${({ theme }) => theme.iconBg};
    color: ${({ theme }) => theme.text};
    border: none;
    font-size: 0.9375rem;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${({ theme }) => theme.secondaryColor};
    }

    :focus,
    :active {
      border: none;
      outline: none;
      color: ${({ theme }) => theme.text};
    }
  }
`

export const CommentContainer = styled.div`
  height: auto;
  width: auto;
  padding: 4px 16px;
`

export const CommentFlex = styled.div`
  display: flex;
  flex-direction: row;
`

export const CommentBubble = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.iconBg};
  border-radius: 18px;

  > p {
    margin: 0;
  }
`
