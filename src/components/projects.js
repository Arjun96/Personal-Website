import React, { Component } from 'react'
import {Grid, Cell,Card, CardTitle, CardActions, Button, CardText} from 'react-mdl';

class Projects extends Component{

    constructor(props){
        super(props);
        this.state = {activeTab:0};
    }

    render() {
        return(
            <div className="category-tabs">
                
                <br></br>
                <br></br>

                <Grid>
                    <Cell col={12}>
                        <div className="projects-grid">

                            {/* Personal Website */}
                            <Card shadow={5} style={{minWidth:'450', minHeight:'400px', margin: 'auto'}}>
                                <CardTitle style={{color:'#fff', height: '176px', 
                                background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>
                                    Personal Website
                                </CardTitle>
                                <CardText>I started this project in August 2020 as an attempt to create my first full stack web application from the ground up and brush up on my 
                                    web development skills. This website will serve also serve as my portfolio and be used to showcase my projects.
                                </CardText>
                                <br></br>
                                <CardActions border>
                                    {/* Personal Website Github */}
                                    <a href='https://github.com/Arjun96/Arjun96.github.io' target="_blank" rel="noopener noreferrer">
                                        <Button colored>
                                            Github </Button>
                                    </a>
                                    {/* Personal Website Link */}
                                    <a href='https://arjunluthra.com' target="_blank" rel="noopener noreferrer">
                                        <Button colored>Live Demo</Button>
                                    </a>
                                </CardActions>
                            </Card>

                            <br></br>

                            {/* Magicam */}
                            <Card shadow={5} style={{minWidth:'450', minHeight:'400px', margin: 'auto'}}>
                                <CardTitle style={{color:'#fff', height: '176px', 
                                background: 'url(https://devpost-challengepost.netdna-ssl.com/assets/defaults/thumbnail-placeholder-42bcab8d8178b413922ae2877d8b0868.gif) center / cover'}}>
                                    Magicam
                                </CardTitle>
                                <CardText> This project was created over the course of 3 days during Hack Western 2 in 2016. Collaborated with 3 other contestants to
                                    impose videos on top of real world objects. This app was awarded the first place prize at the event.
                                </CardText>
                                <br></br>
                                <CardActions border>
                                    {/* Magicam Devpost */}
                                    <a href='https://devpost.com/software/magicam-9ij0zr' target="_blank" rel="noopener noreferrer">
                                        <Button colored>
                                            Devpost </Button>
                                    </a>
                                    {/* Magicam Youtube Link #1 */}
                                    <a href='https://www.youtube.com/watch?v=4o74Fb1uQYc' target="_blank" rel="noopener noreferrer">
                                        <Button colored>Demo 1</Button>
                                    </a>
                                    {/* Magicam Youtube Link #2 */}
                                    <a href='https://www.youtube.com/watch?v=xpLB4pwLOMk' target="_blank" rel="noopener noreferrer">
                                        <Button colored>Demo 2</Button>
                                    </a>
                                </CardActions>
                            </Card>

                            <br></br>

                            {/* Facetag */}
                            <Card shadow={5} style={{minWidth:'450', minHeight:'400px', margin: 'auto'}}>
                                <CardTitle style={{color:'#000000', height: '176px', 
                                background: 'url(https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/000/362/192/datas/medium.jpg) center / cover'}}>
                                    Facetag
                                </CardTitle>
                                <CardText> This project was created over the course of 3 days during Hack Western 2 in 2016. 
                                    Collaborated with 3 other contestants to impose videos on top of real world objects. 
                                    This app was awarded the first place prize at the event.
                                </CardText>
                                <br></br>
                                <CardActions border>
                                    {/* Facecam Github */}
                                    <a href='https://github.com/Arjun96/Nhacks' target="_blank" rel="noopener noreferrer">
                                        <Button colored>Github</Button>
                                    </a>
                                    {/* Facecam Devpost */}
                                    <a href='https://devpost.com/software/facetag-pmuhy0' target="_blank" rel="noopener noreferrer">
                                        <Button colored>
                                            Devpost </Button>
                                    </a>
                                </CardActions>
                            </Card>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;