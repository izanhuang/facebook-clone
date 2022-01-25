import React from 'react'
import styled from 'styled-components'

export const LineBreak = styled.div`
  display: block;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 10px;
  margin-bottom: 10px;

  > span {
    position: relative;
    display: inline-block;
    color: #96999e;
  }

  > span:before,
  > span:after {
    content: '';
    position: absolute;
    top: 50%;
    width: 9999px;
    height: 1px;
    background: #dadde1;
  }

  > span:before {
    right: 100%;
    margin-right: 15px;
  }

  > span:after {
    left: 100%;
    margin-left: 15px;
  }
`
export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #dadde1;
  margin: 20px 0px;
`
