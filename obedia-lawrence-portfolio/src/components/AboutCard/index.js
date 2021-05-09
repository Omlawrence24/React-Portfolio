import React from "react";

 function AboutCard () {
        return (
          <div>
        <div class="notification is-primary">
            <h3><strong>ABOUT ME</strong></h3>
        </div>

        <div class="container-fluid">
            <div class="row">
                <h3 id="phrase">

                    <em> "Marketing is taking the user story, finding out whats their needs then, implementing the code to deliver
                     the best outcome for the User." </em> </h3>
            </div>
        </div>


        <div class="col-md-8">
            <div class="card-body ">
                <h5 class="card-title">Full Stack Developer Specializing in:</h5>
                <p class="card-text"> MySQL/Sequelize</p>
                <p>JavaScript/Jquery/AJAX</p>
                <p> Mongo/Mongoose</p>
                <p>Node.js</p>
                <p>Express</p>
                <p class="card-text"><small class="text-muted"></small></p>
            </div>
        </div>
    </div>
        )
};

export default AboutCard;