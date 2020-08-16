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
                            
                            Hello, and welcome to my personal website. <br/><br/>

                            My name is Arjun Luthra and I have recently graduated with a degree in Computer Science at the University of Toronto as of May 2020. <br/><br/>
                            
                            I'm a software engineer with full-stack experience, including React (web and native), Java (object oriented prgramming),
                            Python (general scripting and automation), as well as some Computer Networking (TCP/IP).
                             
                            </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr></hr>
                        <div className="contact-list">
                            <List>

                                <ListItem>
                                    <ListItemContent>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        <a href="mailto:arjun.luthra@mail.utoronto.ca">
                                            arjun.luthra@mail.utoronto.ca
                                        </a>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        <a href="tel:4162009996">
                                            (416) 200-9996
                                        </a>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent>
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                        <a href="https://www.linkedin.com/in/arjun-luthra/" target="_blank" rel="noopener noreferrer" title="Linkedin">
                                            linkedin.com/in/arjun-luthra/
                                        </a>
                                    </ListItemContent>
                                </ListItem>    
                            </List>
                        </div>
                    </Cell>
                    <strong>Copyright &copy; Arjun Luthra 2020</strong>
                </Grid>
            </div>

        )
    }

}

export default Contact;