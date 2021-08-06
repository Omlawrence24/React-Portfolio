import React from "react";
import close from "../../assets/bluewebsitephotos/close.png";

const About = () => {
    return (
        <div id="about" className="about-page">
            <div className="flexbox-container">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img className="main-photo" src={close} alt="close"></img>
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h3 className="card-title"> <strong>How did this Marketing Girl from the South discover Software Engineering!!</strong></h3>

                                <h5 className="card-text">I've specialized in Retail and Management in the Hospitality Industry for
                                over 10 years! And diving head first into Software Engineering has been a great
                                transitional career move, in addition to my previous degree in Fashion Marketing and Communications.
                            <strong><em>Retail & Hospitality literally listens to the User story, finds out what they need
                                    then implements the necessary to deliver
                           the best outcome. No pun intended.</em></strong></h5>
                                <h5 className="card-text" >Today people are more likely to shop online than in stores, for more reason than one of course. This opens up
                                a world of Marketing that caters to people in their
                                home, car, Anywhere. I went from working High-End Retail to the Hospitality Industry where I quickly became General Manager
                                for some of Atlanta's most Popular Restaurants, Bars, and Lounges. Easy to say I'm a "People Person".
                                And with the world of Technology I would love to bridge that gap. How exciting it is to connect & service people all over the world?
                            </h5>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
