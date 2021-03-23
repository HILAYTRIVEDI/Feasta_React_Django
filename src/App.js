import React from 'react';
import './App.css';
import NavMenu from './NavMenu';
import {BrowserRouter as Router} from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <div>
        <Router>
          <NavMenu/>
        </Router>
        <Footer/>
    </div>
  )
}

export default App

