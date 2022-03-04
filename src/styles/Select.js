import styled, { css } from 'styled-components'

export const Select = styled.select`
  border-radius: 4px;
  color: #1c1e21;
  border: 1px solid #ccd0d5;
  font-family: SFProText-Medium, Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: normal;
  height: 36px;
  line-height: 20px;
  padding: 0 8px;
  padding-right: 20px;
  width: 125px;
  -webkit-appearance: none;
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/Yrq8Y9PlN02.png);
  background-position: right 8px center;
  background-repeat: no-repeat;
  background-size: 14px;

  option {
    color: #1c1e21;
    font-family: SFProText-Medium, Helvetica, Arial, sans-serif;
    font-size: 15px;
    height: 36px;
    line-height: 20px;
  }

  @media (max-width: 415px) {
    width: 100px;
  }

  ${(props) =>
    props.editGender &&
    css`
      background-color: ${({ theme }) => theme.iconBg};
      color: ${({ theme }) => theme.text};
      cursor: pointer;

      option:selected {
        border: 1px solid blue;
      }
    `}
`
