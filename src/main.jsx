
import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import theme from '../src/utils/theme/index.js'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline/>
    <App />
    </Router>
    </ThemeProvider>
  </React.StrictMode>,
)
