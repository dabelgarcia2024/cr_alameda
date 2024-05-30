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
        <AcercaDe />
        <EstudioDeLos12Pasos />
        <Contactenos />
      </section>
      <Footer />
    </div>
  );
};


export default App;

