import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import RegistrationForm from './component/ActualWayOfForm.jsx'
import './index.css'
import LoginForm from './component/LoginForm.jsx'
import ContactForm from './component/ContactForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <RegistrationForm /> */}
    {/* <LoginForm /> */}
    <ContactForm />
  </React.StrictMode>,
)
