import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
class Portfolio extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        title: "Obedia Lawrence",
        headerLinks: [
            { title: "Home", path: "/" },
            { title: "About", path: "/AboutMe" },
            { title: "Services", path: "/Services" },
            { title: "Portfolio", path: "/Portfolio" },
            { title: "Contact Me", path: "/Contact Me" },

        ],
        home: {
            title: "Obedia Lawrence",

        },
        about: {
            title: "About Me"
        },
        services: {
            title: "Technologies Known"

        },
        portfolio: {
            title: "Take a Look"
        },
        contact: {
            title: "Lets Talk"
        }
    }
}

render() {
    return (
        <Router>
        
        </Router>
    )
}
}

export default Portfolio;