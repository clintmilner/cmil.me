import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import CM from './CM'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <>
      <CM />
      {/*<App />*/}
    </>
  </React.StrictMode>,
)
