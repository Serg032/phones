import React from "react";
import Header from "./components/header/header";
import './App.css'
import { BrowserRouter } from "react-router-dom";
import Navegacion from './routes'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Navegacion/>
      </BrowserRouter>
    </div>
    

  );
}

export default App;
