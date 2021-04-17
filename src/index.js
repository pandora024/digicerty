import React from 'react';
import './index.css';
import App from './App';

//ส่วนที่ import เพิ่มเติม
import {BrowserRouter, Router, Route, Link} from 'react-router-dom'
import {browserHistory} from 'react-router'
import ReactDOM, {render} from 'react-dom';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
)

