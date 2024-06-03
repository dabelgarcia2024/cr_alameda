import React from "react";
import Navbar from "./components/navbar";
import Logo from "./components/logo";
import NavCele from "./components/NavCele";
import AcercaDe from "./components/AcercaDe";
import EstudioDeLos12Pasos from "./components/EstudioDeLos12Pasos";
import Contactenos from "./components/Contactenos";
import Footer from "./components/footer";
import './styles/frame.module.css';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Logo 
        src="/img/logo-celebremos-1@3x.png" 
        alt="Logo celebremos" 
      />
      <NavCele />
      <section>
        <div id="acerca-de">
          <AcercaDe />
        </div>
        <div id="estudio-de-los-12-pasos">
          <EstudioDeLos12Pasos />
        </div>
        <div id="contactenos">
          <Contactenos />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;


