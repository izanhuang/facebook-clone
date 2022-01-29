import styled, { css } from 'styled-components'
import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { IoMoon } from 'react-icons/io5'
import { IconButtonSpan } from '../styles/Button'

const Label = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  cursor: pointer;
`

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  width: 190px;
  height: 100%;
  justify-content: space-between;
  cursor: pointer;
`

const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: #b3b3b3;
  border-radius: 30px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 32px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`

const Input = styled.input`
  opacity: 0;
  position: absolute;
  cursor: pointer;

  &:checked + ${Switch} {
    background: var(--fb-blue);

    &:before {
      transform: translate(32px, -50%);
    }
  }
`

export const ToggleSwitch = () => {
  const { theme, toggleTheme } = useTheme()
  const [checked, setChecked] = useState(theme == 'light' ? false : true)

  const handleChange = (e) => {
    setChecked(e.target.checked)
    toggleTheme()
  }

  return (
    <Label>
      <IconButtonSpan small spacing>
        <IoMoon />
      </IconButtonSpan>
      <SwitchLabel>
        <div>Dark mode</div>
        <Input
          checked={checked}
          type="checkbox"
          onChange={(e) => {
            handleChange(e)
          }}
        />
        <Switch />
      </SwitchLabel>
    </Label>
  )
}