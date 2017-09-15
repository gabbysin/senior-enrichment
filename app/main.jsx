'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store'
import Root from './components/Root'


// is getting imported as `render` object destructured from `react-dom` same as ReactDom.render()
render (
<Provider store={store}>
  <Router>
    <Root/>
  </Router>
</Provider>,
  document.getElementById('main')
)