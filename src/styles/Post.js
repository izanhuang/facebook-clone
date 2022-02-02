import styled from 'styled-components'

export const Post = styled.div`
  width: 591px;
  height: auto;
  padding: 12px 16px 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.bgSecondary};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direciton: column;
  border-radius: 10px;
  box-sizing: border-box;

  @media (max-width: 700px) {
    min-width: 22rem;
  }
`

export const CreatePostContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`
export const TextArea = styled.textarea``
