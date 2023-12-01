import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  /* En desarrollo, el strict mode hace que se hagan dos 
  peticiones a la api, por lo que si la aplicación se esta
  ejecutando en servidor de desarrollo, es mejor no usar strict mode*/

  <React.StrictMode>
    <App />
  </React.StrictMode>,

  // <App />
)
