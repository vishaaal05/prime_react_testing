import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'primereact/resources/themes/lara-light-blue/theme.css';  // Choose a theme
import 'primereact/resources/primereact.min.css';                // Core CSS
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
