import React from 'react';
import Container from 'react-bootstrap/esm/Container';

const Services = () => {
    return (
        <div id="services" className="tech"> 
       
            <Container>
           
            <h1 className="header"> Technologies & Services Offered</h1>
            <div className="container"> 
  <div className="row align-items-start">
    <div className="col-md-3">
      HTML
    </div>
    <div className="col-md-3">
      CSS
    </div>
    <div className="col-md-3">
     JavaScript
    </div>
  </div>
  
  <div className="row align-items-center">
    <div className="col-md-3">
      jQuery
    </div>
    <div className="col-md-3">
      MongoDb/MYSQL
    </div>
    <div className="col-md-3">
      Bootstrap
    </div>
  </div>
  
  <div className="row align-items-center">
    <div className="col-md-3">
      Express
    </div>
    <div className="col-md-3">
      PWA
    </div>
    <div className="col-md-3">
      Framework
    </div>
  </div>
  
  <div className="row align-items-center">
    <div className="col-md-3">
      Canva
    </div>
    
    <div className="col-md-3">
      GitHub
    </div>
   
    <div className="col-md-3">
      Ajax/Fetch
    </div>
  </div>
  <div className="row align-items-end">
    <div className="col-md-3">
      React/Redux
    </div>
    <div className="col-md-3">
      Restful API's
    </div>
    <div className="col-md-3">
     Node.Js
    </div>
   
  </div>
</div>
</Container>
       </div>
    )
}

export default Services
