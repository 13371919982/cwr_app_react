import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './common/css/common.css'
import axios from './common/axios/axios'
import { Provider } from "react-redux"
import configStore from './store/configStore'

React.Component.prototype.axios=axios

const store = configStore()



ReactDOM.render( 
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)