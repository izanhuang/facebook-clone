import React from 'react'
import styled, { css } from 'styled-components'

export const BlockWrapper = styled.div`
  display: block;
  width: 100%;
`

export const Wrapper = styled.div`
  height: auto;
  width: 100%;
  position: relative;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContentWrapper = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  max-width: 980px;
  width: 100px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CenterElement = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  ${(props) =>
    props.padding &&
    css`
      a {
        padding: 10px 0 2px;
      }
    `}
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
`

export const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
