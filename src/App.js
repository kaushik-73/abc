
import React, { Component } from 'react';

import Header from './mycomponents/Header';
import Footer from './mycomponents/Footer';

import Home from './mycomponents/Home';
import About from './mycomponents/About';
import Contact from './mycomponents/Contact';
// import logo from './logo.svg';
import './App.css';
import './mycomponents/Home.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <Header/>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
          </Routes>
          
          <Footer/>
          </div>
       </Router>
   );
  }
}
  

export default App;
