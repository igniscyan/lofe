import React from 'react';
//import logo from '../../../public/logo.png';
import './App.css';
import { NavBar } from '../NavBar/NavBar';
import { Preloader } from '../Preloader/Preloader';
import { PageContent } from '../PageContent/PageContent';
import { About } from '../About/About';
import { Footer } from '../Footer/Footer';

export const App = (props) => {
  return (
    <>
      <Preloader />
      <NavBar />
      <PageContent />
      <About />
      <Footer />
    </>
  );
};
