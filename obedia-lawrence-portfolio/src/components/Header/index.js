import React from "react"
import Typed from "react-typed";
import Particles from "react-particles-js";


const Header = () => {
    return (

        <div id="main">
            <Particles className="particles-canvas"
                params={{
                    particles: {
                        number: {
                            value: 30,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 6,
                                color: "#f9ab00"
                            }
                        }
                    }
                }} />
            <div className="header">
                <div className="main-info">
                    <div class="centered">
                        <h1> Obedia "bebe" Lawrence </h1>
                        <Typed
                            className="typed-text"
                            strings={["Web Design", "Web Development", "Relational DataBase", "UI/UX"]}
                            typeSpeed={40}
                            backSpeed={60}
                            loop
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
