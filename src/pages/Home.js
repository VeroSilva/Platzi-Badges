import React from "react";
import { Link } from "react-router-dom";
import logoConf from "../images/logo-conf.svg";
import astronautas from "../images/astronautas.svg";
import "./styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container_home">
          <div className="home_info text-light">
            <img className="img-fluid" src={logoConf} alt="Logo" />
            <h1>PRINT YOUR BADGES</h1>
            <h5>The easiest way to manage your conference</h5>
            <Link to="/badges" className="btn btn-primary">
              Start now
            </Link>
          </div>

          <div className="home_image">
            <img className="img-fluid" src={astronautas} alt="Logo" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
