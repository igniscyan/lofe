import React from 'react';
//import logo from '../../../public/logo.png';
import './App.css';
import { NavBar } from '../NavBar/NavBar';
import { Preloader } from '../Preloader/Preloader';
import { Home } from '../Home/Home';
import { About } from '../About/About';
import { Footer } from '../Footer/Footer';
import { Tour } from '../Tour/Tour';
import { Tool } from '../Tool/Tool';
import { Route } from 'react-router-dom';

export const App = (props) => {
  return (
    <>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={About} />
      <Route path="/tourdates" component={Tour} />
      <Route path="/tool" component={Tool} />
      <Footer />
    </>
  );
};
