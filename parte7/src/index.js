import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'
import Blog from './components/Blog'
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path='/' component={Home} exact/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/blog' component={Blog}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
