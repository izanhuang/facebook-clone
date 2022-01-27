import React, { createContext, useContext, useState } from 'react'
import { lightTheme, darkTheme } from '../styles/themes'

const ThemeContext = React.createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }) {
  // const localSt = localStorage.getItem('theme')
  // const [theme, setTheme] = useState(
  //   localSt ? (localSt === 'dark' ? darkTheme : lightTheme) : lightTheme,
  // )

  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
