import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import render from "../assets/images/FullSizeRender.jpeg";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
//import ResumeBackground from "../assets/images/resumeBackground.jpg"
//import BlackCircle from "../assets/images/blackCircle.png"

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-background" col={4}>
            <div className="resume-image">
              <div style={{ textAlign: "center" }}>
                <img
                  src={render}
                  alt="pic"
                  style={{ height: "300px", marginTop: "50px" }}
                />
              </div>
              <h2
                style={{
                  paddingTop: "2em",
                  color: "maroon",
                  fontFamily: "Cinzel, serif"
                }}
              >
                Joshua Jackson
              </h2>
              <h4 style={{ color: "gold", fontFamily: "Cinzel, serif" }}>
                Programmer
              </h4>

              <p
                style={{
                  color: "black",
                  fontSize: "20px",
                  fontFamily: "Cinzel, serif",
                  fontWeight: "bold"
                }}
              >
                Graduate of UCSD Full-Stack Coding Bootcamp with multiple years
                in Hospitality, most recently as a Operations Team Specialist.
                My ambition is to apply and successfully implement my expertise
                of heart-felt care from Hospitality combined with my creative
                thinking and understanding of programming to build
                applications,websites and databases semantically beautiful with
                those I interact with.
                <hr />
                Possessing skills of unparalled customer service and innovative
                understanding of programming, I believe I am able to offer a
                quality product and service like no other. Time management,
                critical thinking and problem solving paired with a passion to
                communicate and work cohesively allows me to truly enjoy an
                office environment that thrives on character,passion and
                culture.
                <hr />
                My goal is to assist, create and inject passion with charisma
                into every keystroke. Transforming ideas to products to increase
                UI, UX and elevated expectations of how efficency inceases
                quality of lie is my "commit" to the respository of life.
              </p>
              <h5
                style={{
                  color: "gold",
                  fontFamily: "Cinzel, serif",
                  fontSize: "20px"
                }}
              >
                Address
              </h5>
              <p
                style={{
                  color: "white",
                  fontFamily: "Cinzel, serif",
                  fontSize: "20px"
                }}
              >
                San Diego,California,92102
              </p>
              <h5
                style={{
                  color: "gold",
                  fontFamily: "Cinzel, serif",
                  fontSize: "20px"
                }}
              >
                Phone
              </h5>
              <p
                style={{
                  color: "white",
                  fontFamily: "Cinzel, serif",
                  fontSize: "20px"
                }}
              >
                (508)560-4109
              </p>
              <h5
                style={{
                  color: "gold",
                  fontFamily: "Cinzel, serif",
                  fontSize: "20px"
                }}
              >
                Email
              </h5>
              <p
                style={{
                  color: "white",
                  fontFamily: "Cinzel, serif",
                  fontSize: "20px"
                }}
              >
                Jjackson17MV@gmail.com
              </p>
              <h5
                style={{
                  color: "gold",
                  fontFamily: "Cinzel, serif",
                  fontSize: "20px"
                }}
              >
                Website
              </h5>
              <p
                style={{
                  color: "white",
                  fontFamily: "Cinzel, serif",
                  fontSize: "20px"
                }}
              >
                mywebsite.com
              </p>
            </div>
          </Cell>
          <Cell className="resume-rightCol" col={8}>
            <h2 style={{ color: "gold", fontFamily: "Cinzel, serif" }}>
              Education
            </h2>

            <Education
              startYear={2019}
              endYear={2019}
              schoolName="UCSD Full-Stack Coding Bootcamp"
              schoolDescription="Required to graduate, three projects were created that properly demonstrated functioning understanding of each topic covered in class. First was using HTML/CSS and Firebase. Second was Handlebars,Node.js,NodeExpress and MySQL.Lastly, MERN stack was required for our final project.
              The course successfully taught me the fundmamentals of programming as well as the complexities that innovation require. Graduated with passion,dilligence and further creative/critical thinking skills."
            />

            <Education
              startYear={2007}
              endYear={2010}
              schoolName="Worcester State University"
              schoolDescription="Located in central Massachusetts, majored in Communications as well as playing on the college soccer team and Track team."
            />

            <hr style={{ borderTop: "3px solid grey" }} />

            <h2 style={{ color: "gold", fontFamily: "Cinzel, serif" }}>
              Experience
            </h2>

            <Experience
              startYear={2016}
              endYear="Present"
              jobName="Operations/Team Specialist-San Diego Dining Group"
              jobDescription="Assist all company restaurants in database management and troubleshooting. Programming databases and UI experience for staff to enable efficient service and proper inventory analysis"
            />

            <Experience
              startYear={2016}
              endYear={2017}
              jobName="Assitant General Manager-San Diego Dining Group"
              jobDescription="Assist GM in daily operations as well as developing and implementing SEO, website development, database management, menu creation, marketing and managing service expectations and standards."
            />

            <hr style={{ borderTop: "3px solid grey" }} />

            <h2 style={{color:"gold"}}>Skills</h2>
            <Skills skill="JAVASCRIPT" progress={80} />

            <Skills skill="HTML/CSS" progress={90} />

            <Skills skill="NODE.JS" progress={80} />

            <Skills skill="REACT" progress={80} />

            <Skills skill="MySQL" progress={85} />

            <Skills skill="MongoDB" progress={80} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
