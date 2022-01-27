import React, { useState } from 'react'
import AppRouter from './router/AppRouter'
import { AuthProvider } from './contexts/AuthContext'
import './App.css'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/themes'
import { GlobalStyles } from './styles/global'
import { useTheme } from './contexts/ThemeContext'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </StyledThemeProvider>
  )
}

export default App
