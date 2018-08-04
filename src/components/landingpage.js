import React, { Component } from "react";
import Menu from './menu';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Menu optionSelected='0'/>
        <main id="home">
          <h1 className="lg-heading">
            Carlos <span className="text-secondary">Llano</span>
          </h1>
          <h2 className="sm-heading">Software Engineer</h2>
          <div className="icons">
            <a href="https://www.linkedin.com/in/carlosllanolozano/">
              <i className="fab fa-linkedin fa-3x" />
            </a>
            <a href="https://github.com/CarlosLlano">
              <i className="fab fa-github fa-3x" />
            </a>
            <a href="https://angel.co/carlosllano">
              <i className="fab fa-angellist fa-3x" />
            </a>
            <a href="https://www.youtube.com/channel/UCiIW-AlJsD_PL-rePV75f-g">
              <i className="fab fa-youtube fa-3x" />
            </a>
          </div>
        </main>
      </div>
    );
  }
}

export default LandingPage;
