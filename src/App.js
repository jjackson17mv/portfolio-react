import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content, Button } from "react-mdl";

import Main from "./components/main";
import { Link } from "react-router-dom";
import "./App.css";
import Background from "../src/assets/images/sizedBlackCircle.png";
//import Image from 'react-bootstrap/Image'
//<Button  className="logo"  type="submit"  alt="a logo" href="/" />
//<button >< img src={Background}  alt="a logo" href="/"></img></button>

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout
          style={{
            background:
              "url(https://i.ytimg.com/vi/7GKZqLmL4PI/maxresdefault.jpg",
            backgroundRepeat: " no-repeat",
            backgroundSize: "cover",
            
          }}
        >
          <Header transparent>
            <Button id="logo-button" href="/">
              <img
                src={Background}
                className="img-fluid"
                alt="pic"
                style={{ height: "100%", width: "100%" }}
              />{" "}
            </Button>

            <Navigation>
              <Link style={{ color: "gold",fontSize:"17px",fontWeight:"bold" }} to="/resume">
                Resume
              </Link>
              <Link style={{ color: "gold",fontSize:"17px",fontWeight:"bold" }} to="/aboutme">
                About Me
              </Link>
              <Link style={{ color: "gold",fontSize:"17px",fontWeight:"bold" }} to="/projects">
                Projects
              </Link>
              <Link style={{ color: "gold",fontSize:"17px",fontWeight:"bold" }} to="/contact">
                Contact
              </Link>
            </Navigation>
          </Header>
          <Drawer>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
