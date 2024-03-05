import React from 'react' // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom/client' // eslint-disable-line no-unused-vars
import App from 'components/app' // eslint-disable-line no-unused-vars
import './index.css'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
