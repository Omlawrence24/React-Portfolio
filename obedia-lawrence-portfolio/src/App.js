// import React from "react";
// import Portfolio from "./page/portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-particles-js"
import NavBar from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
  <>
  <Particles
  className="particles-canvas"
  params={{
    particles: {
      number: {
       value: 30,
       density: {
         enable: true,
         value_area: 900
       }
      },
      shape:{
        type: "circle",
        stroke: {
          width: 6,
          color: "#f9ab00"
        }
      }
    }
  }}
  />
  <NavBar />;
 <Header />;
 <Footer/>
  </>
  );
}

export default App;
