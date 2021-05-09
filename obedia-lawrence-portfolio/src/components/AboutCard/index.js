import React from "react";
import mainPhoto from "../../assets/bluewebsitephotos/close";

function AboutCard() {
    return (


        <div>
            <div ClassName="notification is-primary">
                <h3><strong>ABOUT ME</strong></h3>
            </div>
            
                <div ClassName="container-fluid">
                    <div ClassName="row">
                        <h3 id="phrase">

                            <em> "Marketing is taking the user story, finding out whats their needs then, implementing the code to deliver
                     the best outcome for the User." </em> </h3>
                    </div>
                </div>


                <div ClassName="col-md-8">
                    <div ClassName="card-body ">
                        <h5 ClassName="card-title">Full Stack Developer Specializing in:</h5>
                        <p ClassName="card-text"> MySQL/Sequelize</p>
                        <p>JavaScript/Jquery/AJAX</p>
                        <p> Mongo/Mongoose</p>
                        <p>Node.js</p>
                        <p>Express</p>
                        <p ClassName="card-text"><small ClassName="text-muted"></small></p>
                    </div>
                </div>
        </div>
    )
};

export default AboutCard;