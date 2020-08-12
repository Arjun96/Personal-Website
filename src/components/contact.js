import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'
import avatar from './../documents/photo_cropped_circle.png'

class Contact extends Component{

    render() {
        return (
            
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Arjun Luthra</h2>
                        <img 
                            src={avatar}
                            alt="avatar"
                            style={{height:'250px'}}
                        />
                        <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}> DESCRIPTION HERE</p>
                    </Cell>
                    <Cell col={6}>Half Page</Cell>
                </Grid>


            </div>

        )
    }

}

export default Contact;