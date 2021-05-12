import React from "react";
import horoscope1 from "../../horoscope1.PNG";
import employee from "../../project employee list.PNG";
import scheduler from "../../csh 2.PNG";
import password from "../../4.PNG";
import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

function Projects() {
  return (
 <Container class="d-flex p-20 bd-highlight">
    <Carousel>
      <Carousel.Item className="caption">
        <img
          className="d-block img"
          src={horoscope1}
          alt="First slide"
        />
        <Carousel.Caption className="caption">
        <h5 >Daily Horoscope</h5>
        <p>Allows users to login in to their daily profile to view Horoscope.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block img"
          src={scheduler}
          alt="Second slide"
        />
        <Carousel.Caption className="caption">
        <h5>Day Scheduler</h5>
        <p>Users daily tasks are kept in Localstorage for their return.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block img"
          src={password}
          alt="Third slide"
        />
        <Carousel.Caption className="caption3">
        <h5>Random Password Generator</h5>
        <p>Creates a unique password based on user choices for a more secured password.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block img"
          src={employee}
          alt="Fourth slide"
        />
        <Carousel.Caption className="caption">
        <h5>Team Builder</h5>
        <p>Allows Management to build out teams via Node.Js .</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</Container>
  )
};

/* <Carousel></Carousel>
<div className="photo">
  <h1 className="headerp">Previous Projects</h1>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={horoscope1} className="  d-block w-50" alt="Horoscope"></img>
      <div className="carousel-caption1 d-none d-md-block">
        <h5>Daily Horoscope</h5>
        <p>Allows users to login in to their daily profile to view Horoscope.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={scheduler} className="d-block w-50" alt="Horoscope"></img>
      <div className="carousel-caption2 d-none d-md-block">
        <h5>Day Scheduler</h5>
        <p>Users daily tasks are kept in Localstorage for their return.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={employee} className="d-block w-50" alt="Horoscope"></img>
      <div className="carousel-caption3 d-none d-md-block">
        <h5>Team Builder</h5>
        <p>Allows Management to build out teams via Node.Js .</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={password} className="d-block w-50" alt="Horoscope"></img>
      <div className="carousel-caption4 d-none d-md-block">
        <h5>Random Password Generator</h5>
        <p>Creates a unique password based on user choices for a more secured password.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="false"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="false"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </div> */


export default Projects;
