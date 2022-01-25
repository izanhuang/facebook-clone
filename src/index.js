import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppRouter from './AppRouter'
import { AuthProvider } from './contexts/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
