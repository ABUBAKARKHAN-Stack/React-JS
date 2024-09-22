import React from 'react'
import ReactDOM from 'react-dom/client'
// import {App} from './App.jsx'
import './index.css' 
import {Cleanup} from './components/CleanUpFunc.jsx'
// import { UseEffect } from './components/UseEffectTask.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseEffect /> */}
    <Cleanup />
  </React.StrictMode>,
)
