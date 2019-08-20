import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import image from "../assets/images/FullSizeRender.jpeg";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Joshua Jackson</h2>
            <img src={image} alt="avatar" style={{ height: "350px" }} />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em",fontSize:"15px" }}>
              Please feel free to reach out to me via the social links
            </p>
          </Cell>

          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="content-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Cinzel,serif" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (508)-560-4109
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Cinzel,serif" }}
                  >
                    <i class="fas fa-mail-bulk" aria-hidden="true" />
                    JJackson17MV@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
