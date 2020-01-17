import React from 'react';
import './assets/css/App.css';

// Importar componentes
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
//import SeccionPrueba from './components/SeccionPrueba';
//import Peliculas from './components/Peliculas';

import Router from './Router';


function App() {
  var buttonString = "Ver más";
  return (
    <div className="App">
      <Header />
      <Slider
        title="Bienvenido al Curso de React"
        btn={buttonString}
      />

      <div className="center">

        <Router />

        {/*
          <Peliculas/>
        */}

        <Sidebar />

        <div className="clearfix"></div>

      </div> {/*End div center*/}

      <Footer />

    </div>
  );
}

export default App;
