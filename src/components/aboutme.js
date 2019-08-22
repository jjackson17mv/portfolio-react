import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import MVmap from "../assets/images/MVmap.jpeg";
import chelseaLogo from "../assets/images/chelseaLogo.png";
import codingLogo from "../assets/images/codingLogo.png";

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={MVmap} alt="pic" style={{ height: "300px" }} />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Martha's Vineyard</h2>
            <h4 style={{ color: "grey" }}>Where Im From</h4>
            <hr
              style={{ borderTop: "3px solid", color: "red", width: "50%" }}
            />
            <p>
              Born in Florida, I moved to Martha's Vineyard at a very young age.
              MV is a small but beautiful island with a tight-knit community.
              Speed limit is 45mph and there are no food chains allowed along
              with stop ligts. Only accessible by plane or boat, you must endure
              the freezing cold winters and isolation for the enjoyment of
              summer. It is located about 80 miles south of Boston,MA where in
              my opinion, the best clam chowder you can ever find. The movie
              JAWS was also filmed on MV.
            </p>
          </Cell>

          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={chelseaLogo} alt="pic" style={{ height: "300px" }} />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Joshua Jackson</h2>
            <h4 style={{ color: "grey" }}>Soccer</h4>
            <hr
              style={{ borderTop: "3px solid", color: "red", width: "50%" }}
            />
            <p>
              Growing up my father was my youth and club soccer coach. My
              brother also played, so soccer has always been a huge part of my
              life either on the field on the TV. I played college soccer as
              well as many premier club teams, ocassionally play when I have the
              time. Chelsea FC is my favorite club and my brother and fathers is
              Liverpool, arch rivals. Simple to stay holidays always brings
              trash talk.
            </p>
          </Cell>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={codingLogo} alt="pic" style={{ height: "230px" }} />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Passion</h2>
            <h4 style={{ color: "grey" }}>Coding/Programming</h4>
            <hr
              style={{ borderTop: "3px solid", color: "red", width: "50%" }}
            />
            <p>
              I have been able to combine my passion for Technology and love for
              Hospitality to create an algorithm of heart felt customer service
              that will be served to every client through every keystroke.
              Origin of my passion for computing power began with "Oregon Trail"
              and developed over the years with innovation and technological
              break-throughs such as Napster, iPod, iPhone and the list
              continues. My appreciation for innovation are grass roots,
              witnessing the development through my youth as opposed to my first
              cell phone being an iPhone 30++. 
              <hr/>
              Most would say "Old School" but I
              prefer avant-garde as knowing what life was like with less
              accessibility to information which built diligence, dedication and
              perserverance to find access to data. Within the last four years I
              was able to rediscover my passion for technology through my love
              for hospitality. Interacting with so many guest and experiencing
              vast personalities has built character, endurance, perspective and
              expectations of structure, proper service and bottomline products.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
