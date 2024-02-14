import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './Providers/AuthProvider.jsx'
import Routes from './Routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <Routes />
    </AuthProvider>
  </React.StrictMode>,
)
