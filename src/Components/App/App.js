import React from 'react';
//import logo from '../../../public/logo.png';
import './App.css';
import { NavBar } from '../NavBar/NavBar';
import { Preloader } from '../Preloader/Preloader';
import { PageContent } from '../PageContent/PageContent';
import { About } from '../About/About';
import { Footer } from '../Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const App = (props) => {
  return (
    <>
    <Preloader />
    <NavBar />
    <Switch>
      <Route
      <PageContent />
      <About />
      <Footer />
    </Switch>
    </>
  );
};
