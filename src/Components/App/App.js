import React from 'react';
//import logo from '../../../public/logo.png';
import './App.css';
import {MobileNav} from '../MobileNav/MobileNav';
import { NavBar } from '../NavBar/NavBar';
import { Home } from '../Home/Home';
import { About } from '../About/About';
import { Footer } from '../Footer/Footer';
import { Tour } from '../Tour/Tour';
import { AboutFull } from '../AboutFull/AboutFull';
import { Route } from 'react-router-dom';

console.log(process.env.REACT_APP_BAND_API_KEY);

export const App = (props) => {
  return (
    <div className="scroll-container">
      <MobileNav />
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={About} />
      <Route path="/tourdates" component={Tour} />
      <Route path="/aboutFull" component={AboutFull} />
      <Footer />
    </div>
  );
};
