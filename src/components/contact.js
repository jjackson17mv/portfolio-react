import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import image from "../assets/images/FullSizeRender.jpeg";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2 style={{textAlign:"left", fontfFamily: "Cinzel, serif",color:"maroon"}}>Joshua Jackson</h2>
            <img src={image} alt="avatar" style={{ height: "350px",marginLeft:"5%" }} />
            <p style={{ width: "75%", textAlign:"left", paddingTop: "1em",fontSize:"24px",fontFamily:"Cinzel, serif",color:"maroon",fontWeight:"30px" }}>
              Feel free to contact me via phone,email or by my social links
            </p>
          </Cell>

          <Cell col={6}>
            <h2 style={{textAlign:"right",fontfFamily: "Cinzel, serif",color:"maroon"}}>Contact Me</h2>
           

            <div className="content-list" style={{marginLeft:"35%"}}>
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Cinzel,serif" }} >
                    <i className="fa fa-phone-square" aria-hidden="true" style={{color:"maroon",fontSize:"60px",fontWeight:"40px"}}/>
                    (508)-560-4109
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Cinzel,serif",color:"maroon"}} >
                    <i class="fas fa-mail-bulk" aria-hidden="true"  />
                    JJackson17MV@gmail.Com
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
