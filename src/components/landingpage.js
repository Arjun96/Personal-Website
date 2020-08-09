import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import avatar from './../images/photo_cropped_circle.png'

class LandingPage extends Component{

    render() {
        return (

            <div style={{width: '100%', margin:'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                            src={avatar}
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className='banner-text'>

                            <h1>Software Engineer</h1>
                            <hr/>
                            <p>Java | Python | C/C++ | HTML/CSS | Javascript | React | NodeJS | SQL</p>

                            <div className="social-links">

                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/arjun-luthra/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                                </a>

                                {/* Github */}
                                <a href="https://github.com/Arjun96" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square"  aria-hidden="true"/>
                                </a>

                                {/* Email */}
                                <a href="https://devpost.com/ArjunL" target="_blank" rel="noopener noreferrer">
                                    <i class="fa fa-code"  aria-hidden="true"/>
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