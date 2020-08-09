import React, { Component } from 'react'
import {Grid, Cell,Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

class Projects extends Component{

    constructor(props){
        super(props);
        this.state = {activeTab:0};
    }

    render() {
        return(
            <div className="category-tabs">
                <Grid>
                    <Cell col={12}>
                        <div className="projects-grid">

                            <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                                <CardTitle style={{color:'#fff', height: '176px', 
                                background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>
                                    Personal Website
                                </CardTitle>
                                <CardText>I started this project in August 2020 as an attempt to create my first full stack web application from the ground up and brush up on my 
                                    web development skills. This website will serve also serve as my portfolio and be used to showcase my projects.
                                </CardText>
                                <CardActions border>
                                    <a href='https://github.com/Arjun96/Arjun96.github.io' target="_blank" rel="noopener noreferrer">
                                        <Button colored>
                                            Github </Button>
                                    </a>

                                    <a href='https://arjunluthra.com' target="_blank" rel="noopener noreferrer">
                                        <Button colored>Live Demo</Button>
                                    </a>
                                </CardActions>
                                <CardMenu style ={{color: '#fff'}}>
                                    <IconButton name="share"/>
                                </CardMenu>
                            </Card>

                            <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                                <CardTitle style={{color:'#fff', height: '176px', 
                                background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>
                                    Magicam
                                </CardTitle>
                                <CardText> This project was created over the course of 3 days during Hack Western 2 in 2016. Me and my team of 3 other people were able to impose videos 
                                    on top of real world objects. During the hackathon we took sponsor stickers and imposed a unique video depending on which
                                    sticker was scanned in the app. This app was awarded the first place prize.
                                </CardText>
                                <CardActions border>
                                    <a href='https://devpost.com/software/magicam-9ij0zr' target="_blank" rel="noopener noreferrer">
                                        <Button colored>
                                            Devpost </Button>
                                    </a>

                                    <a href='https://www.youtube.com/watch?v=4o74Fb1uQYc' target="_blank" rel="noopener noreferrer">
                                        <Button colored>Demo 1</Button>
                                    </a>

                                    <a href='https://www.youtube.com/watch?v=xpLB4pwLOMk' target="_blank" rel="noopener noreferrer">
                                        <Button colored>Demo 2</Button>
                                    </a>
                                </CardActions>
                                <CardMenu style ={{color: '#fff'}}>
                                    <IconButton name="share"/>
                                </CardMenu>
                            </Card>

                            <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                                <CardTitle style={{color:'#fff', height: '176px', 
                                background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>
                                    Facetag
                                </CardTitle>
                                <CardText>
                                </CardText>
                                <CardActions border>
                                    <a href='https://github.com/Arjun96/Arjun96.github.io' target="_blank" rel="noopener noreferrer">
                                        <Button colored>
                                            Devpost </Button>
                                    </a>

                                    <a href='https://arjunluthra.com' target="_blank" rel="noopener noreferrer">
                                        <Button colored>Live Demo</Button>
                                    </a>
                                </CardActions>
                                <CardMenu style ={{color: '#fff'}}>
                                    <IconButton name="share"/>
                                </CardMenu>
                            </Card>

                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }

}

export default Projects;