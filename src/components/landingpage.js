import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import htmlLogo from '../assets/images/htmlLogo.png'
import cssLogo from '../assets/images/cssLogo.png'
import javaNodeLogo from '../assets/images/javaNodeLogo.png'
import reactLogo from '../assets/images/reactLogo.png'
import mongoLeaf from '../assets/images/mongoLeaf.png'
import mernStack from '../assets/images/mernStack.png'
//import image from '../assets/images/FullSizeRender.jpeg'




class LandingPage extends Component{
    render(){
        return(
            <div style = {{width:'100%', margin:'auto'}}>
                <Grid className ="landing-grid">
                    <Cell col={12}>
                    
                        

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                             <div className="codeIcons">
                              <img src={htmlLogo} alt="html" style={{height:"150px"}}></img>
                              <img src={cssLogo} alt="css" style={{height:"150px"}}></img>
                              <img src={mongoLeaf} alt="mongo" style={{height:"150px"}}></img>
                              <img src={javaNodeLogo} alt="javaNode" style={{height:"170px"}}></img>
                              <img src={reactLogo} alt="react" style={{height:"170px"}}></img>
                              <img src={mernStack} alt="mern" style={{height:"170px"}}></img>
                              
                              </div>
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