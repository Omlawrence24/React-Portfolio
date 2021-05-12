import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contacts = () => {
    return (
        <Container>
            <Col>
                <div className="contacts">
                    <h1><strong> Lets Talk</strong></h1>
                    <Row>
<br></br>


                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <h4>Name</h4>
                            {/* <span className="input-group-text">Name</span> */}
                            <input type="text" className="form-control" placeholder="Enter your Name"></input>
                            <div className="col-md-4"></div>
                        </div>


                    </Row>
                    <br></br>
                    <Row>
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <h4>Email</h4>
                            {/* <span className="input-group-text">Email</span> */}
                            <input type="text" className="form-control" placeholder="Enter your Email"></input>

                            <div className="col-md-4"> </div>
                        </div>

                    </Row>
                    <br></br>
                    <Row>
                        <div className="col-md-4"> </div>
                        <div className="col-md-4">
                        <h4> Message</h4>
                            <div className="input-group">
                                
                                {/* <span className="input-group-text">Lets Talk</span> */}
                                <textarea className="form-control" aria-label="With textarea"></textarea>
                                <button type="button" class="btn btn-primary">Send</button>

                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </Row>
                </div>

            </Col>
        </Container>
    )
}

export default Contacts
