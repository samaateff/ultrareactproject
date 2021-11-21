import React, {Component} from 'react';
import { HashRouter, Routes , Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Index from './Components/Index';

class App extends Component {
  render() {
    return (
      

      <HashRouter>
      <Navbar />

      <Routes>
            <Route exact path='/'  element={<Index/>} />
            <Route exact path='/contact' element={<Contact/>} />
       </Routes>
      </HashRouter>
      
    )
  }
}

export default App;
