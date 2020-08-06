import React from "react";
//import logo from '../../../public/logo.png';
import "./App.css";
import { NavBar } from "../NavBar/NavBar";
import "../NavBar/NavBar.css"
import { Preloader } from "../Preloader/Preloader";
import { PageContent } from "../PageContent/PageContent"
//Commenting this line out until it's used
//import { Player } from '../Player/Player';

export const App = (props) => {
  return (
    <>
      <Preloader />
      <NavBar />
      <PageContent page="Home"/>
      

    </>
  );
}

// export class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { page: 'Home' };

//     this.updatePageContent = this.updatePageContent.bind(this);
//   }

//   updatePageContent(page) {
//     this.setState({
//       page: page,
//     });
//   }
