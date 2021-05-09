import React from "react";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className = "container">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Me</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="#">Services</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="#">Experience</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="#">Portfolio</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="#">Contact Me</a>
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
