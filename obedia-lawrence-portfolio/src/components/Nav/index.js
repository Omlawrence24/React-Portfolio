import React from "react";
import {Link} from "react-scroll";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
<div className = "container">
        <div className="container-fluid">
          <Link smooth={true} to="" className="navbar-brand" to=""></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link smooth={true} to="header" offset={-110} className="nav-link" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true}  to="about" offset={-110} className="nav-link">About Me</Link>
              </li>
              <li className="nav-item active">
                <Link smooth={true} to="services" offset={-110} className="nav-link" aria-current="page" >Services</Link>
              </li>
             
              <li className="nav-item active">
                <Link smooth={true} to="projects" offset={-110}  className="nav-link" aria-current="page" >Portfolio</Link>
              </li>
              <li className="nav-item active">
                <Link smooth={true} to="contacts" offset={-110} className="nav-link" aria-current="page" >Links
                </Link>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </nav>
      
    </div>
  )
}

export default NavBar
