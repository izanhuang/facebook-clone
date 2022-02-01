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

  ${(props) =>
    props.contacts &&
    css`
      :hover {
        overflow-y: auto;
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
        padding: 0 !important;
      }
    `}
`
export const ImageWrapper = styled.div`
  margin: 12px 12px 12px 0;
`
