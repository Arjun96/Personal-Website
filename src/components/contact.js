import React, { Component } from 'react'
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'
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
                        <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>
                            
                            Welcome to my personal website. <br/><br/>

                            My name is Arjun Luthra and I have recently graduated with a degree in Computer Science at the University of Toronto as of May 2020. <br/><br/>
                            
                            I am currently seeking a full-time position as a Software Engineer. My skills include Java (object oriented prgramming),
                            Python (general scripting and automation), React (web and native) as well as some Computer Networking (TCP/IP). <br/><br/>

                            In my spare time, I like to help pick out parts to and help people build custom gaming computers and I also run a 100TB file server
                            that acts as a personal backup and media server.
                             
                            </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr></hr>
                        <div className="contact-list">
                            <List>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        <a href="mailto:arjun.luthra@mail.utoronto.ca">
                                            arjun.luthra@mail.utoronto.ca
                                        </a>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        <a href="tel:4162009996">
                                            (416) 200-9996
                                        </a>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton', color:'black'}}>
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                        <a href="https://www.linkedin.com/in/arjun-luthra/" target="_blank" rel="noopener noreferrer" title="Linkedin">
                                            linkedin.com/in/arjun-luthra/
                                        </a>
                                    </ListItemContent>
                                </ListItem>    


                            </List>
                        </div>
                    </Cell>
                </Grid>


            </div>

        )
    }

}

export default Contact;