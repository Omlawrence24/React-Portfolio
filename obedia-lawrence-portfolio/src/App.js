import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Projects from "./components/Projects";

import "./App.css";

function App() {
  return (
    <div>
      <NavBar />;
      <Header />;
      <About />;
      <Services />;
      <Projects />;
      <Footer />;
    </div>
  );
}

export default App;
