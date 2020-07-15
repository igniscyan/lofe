import React from "react";
//import logo from '../../../public/logo.png';
import "./App.css";
import { NavBar } from "../NavBar/NavBar";
import "../NavBar/NavBar.css"
import { Preloader } from "../Preloader/Preloader";
//Commenting this line out until it's used
//import { Player } from '../Player/Player';

export const App = () => {
  return (
    <>
      <Preloader />
      <NavBar />
    </>
  );
}
