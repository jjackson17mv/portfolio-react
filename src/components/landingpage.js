import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';





class LandingPage extends Component{
    render(){
        return(
            <div style = {{width:'100%', margin:'auto'}}>
                <Grid className ="landing-grid">
                    <Cell col={12}>
                        
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                             <hr/>
                             <p>HTML | CSS | Javascript | jQuery | Firebase | MongoDB | MySQL | Node.js | MERN stack | React</p>

                             <div className="social-links">

                                 <a href="https://www.linkedin.com/in/joshua-jackson-387b6593/" rel="noopener noreferrer" target="_blank">
                                 <i class="fab fa-linkedin" aria-hidden="true"/>
                                 </a>

                                 <a href="https://github.com/jjackson17mv" rel="noopener noreferrer" target="_blank">
                                 <i class="fab fa-github-square" aria-hidden="true" />
                                 </a>

                                 <a href="https://www.facebook.com/joshua.jackson.33" rel="noopener noreferrer" target="_blank">
                                 <i class="fab fa-facebook-square" aria-hidden="true" />
                                 </a>

                                 <a href="https://www.instagram.com/joshuajackson5482/" rel="noopener noreferrer" target="_blank">
                                 <i class="fab fa-instagram" aria-hidden="true" />
                                 </a>

                                
                        </div>
                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default LandingPage;