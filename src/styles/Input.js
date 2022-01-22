import React from 'react'
import styled from 'styled-components'

export const Input = styled.input`
  font-size: 17px;
  padding: 14px 16px;
  width: 330px;
  border: 1px solid #dddfe2;
  color: #1d2129;
  height: 22px;
  line-height: 16px;
  display: inline-block;
  border-radius: 8px;
  margin: 6px 0;

  :focus {
    outline: none !important;
    border: 1px solid #3676f1;
    box-shadow: 0 0 3px #719ece;
  }
`
