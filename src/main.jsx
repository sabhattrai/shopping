import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from './app/store'
import { Provider } from 'react-redux'
import store from '../src/redux/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  < BrowserRouter>
  <Provider store ={store}>
    <App />
    </Provider>
  </ BrowserRouter>,
)
