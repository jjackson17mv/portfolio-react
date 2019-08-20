import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import render from "../assets/images/FullSizeRender.jpeg";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={render} alt="pic" style={{ height: "200px" }} />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Joshua Jackson</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr
              style={{ borderTop: "3px solid", color: "red", width: "50%" }}
            />
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.Contrary to
              popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making
              it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
              Extremes of Good and Evil) by Cicero, written in 45 BC. This book
              is a treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
              amet..", comes from a line in section 1.10.32. The standard chunk
              of Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
              et Malorum" by Cicero are also reproduced in their exact original
              form, accompanied by English versions from the 1914 translation by
              H. Rackham.
            </p>
            <h5>Address</h5>
            <p>San Diego,California,92102</p>
            <h5>Phone</h5>
            <p>(508)560-4109</p>
            <h5>Email</h5>
            <p>Jjackson17MV@gmail.com</p>
            <h5>Website</h5>
            <p>mywebsite.com</p>
            <hr
              style={{ borderTop: "3px solid", color: "red", width: "50%" }}
            />
          </Cell>
          <Cell className="resume-rightCol" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2003}
              endYear={2010}
              schoolName="My university"
              schoolDescription="i went to woo state for x amount years, this is located in worcester ma"
            />

            <Education
              startYear={2003}
              endYear={2010}
              schoolName="My university"
              schoolDescription="i went to woo state for x amount years, this is located in worcester ma"
            />

            <hr style={{ borderTop: "3px solid gold" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="first job"
              jobDescription="this is was my first job"
            />

            <Experience
              startYear={2013}
              endYear={2019}
              jobName="second job"
              jobDescription="this is was my first job"
            />
            
            <hr style={{ borderTop: "3px solid gold" }} />

            <h2>Skills</h2>
            <Skills
            skill="javascript"
            progress={100}
            />

        <Skills
            skill="HTML/CSS"
            progress={100}
            />

<Skills
            skill="Node.js"
            progress={100}
            />

<Skills
            skill="React"
            progress={100}
            />

<Skills
            skill="MySQL"
            progress={100}
            />

<Skills
            skill="MongoDB"
            progress={100}
            />

          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
