import React from "react";
import horoscope1 from "../../assets/bluewebsitephotos/horoscope 1.PNG";
import employee from "../../assets/project employee list.PNG";
import scheduler from "../../assets/bluewebsitephotos/csh 2.PNG";
import password from "../../assets/4.PNG";
import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

function Projects() {
  return (
    <div id="projects">
      <Container class="d-flex p-20 bd-highlight">
        <Carousel className="backg">
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
    </div>
  )
};

export default Projects;
