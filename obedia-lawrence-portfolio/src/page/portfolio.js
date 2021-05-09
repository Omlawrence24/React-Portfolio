import { Component } from "react";
import Footer  from "../components/Footer";
// import Nav from "../components/Nav";
// import Projects from "../components/Projects";
import AboutCard from "../components/AboutCard";
import AboutSummary from "../components/AboutSummary";

class Portfolio extends Component {


    render() {

        return (
           <div>
              < AboutCard />,
              <AboutSummary />,
                 <Footer />

                    
                </div>
           
        )
    };

    // {Props.children}
};

export default Portfolio;