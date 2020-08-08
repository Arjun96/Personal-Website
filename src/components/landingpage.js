import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import avatar from './../images/photo_cropped.jpg'

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
                        </div>
                    </Cell>
                </Grid>
            </div>

        )
    }

}

export default LandingPage;