import React from "react"
import Typed from "react-typed";
const Header = () => {
    return (
        <div id="header">
            <div className="header-wraper">
                <div className="main-info">
                
                    <h1> Obedia "bebe" Lawrence </h1>
                    <Typed
                        className="typed-text"
                        strings={["Web Design", "Web Development", "Relational DataBase", "UI/UX"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                    {/* / */}
                </div>


            </div>
        </div>
    )
}

export default Header
