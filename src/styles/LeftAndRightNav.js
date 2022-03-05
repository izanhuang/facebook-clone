import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  height: 92vh;
  width: 18vw;
  min-width: 264px;

  ${(props) =>
    props.leftNav &&
    css`
      @media (max-width: 1100px) {
        opacity: 0;
        display: none;
      }
    `}

  ${(props) =>
    props.contacts &&
    css`
      @media (max-width: 900px) {
        opacity: 0;
        display: none;
      }
    `}
`

export const Nav = styled.nav`
  position: fixed;
  height: 92vh;
  width: 18vw;
  min-width: 264px;
  margin-top: 16px;
  overflow: hidden;

  @media (max-height: 768px) {
    height: 91vh;
  }

  ${(props) =>
    props.contacts &&
    css`
      :hover {
        overflow-y: auto;

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #888;
        }
      }
    `}
`
export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  height: auto;

  > li {
    height: 52px;
  }

  ${(props) =>
    props.contacts &&
    css`
      padding: 0;
      &:first-child {
        padding-top: 0.8em;
      }
      > li {
        padding: 0 8px;
      }
    `}
`
export const ImageWrapper = styled.div`
  margin: 12px 12px 12px 0;
`
