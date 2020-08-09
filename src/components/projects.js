import React, { Component } from 'react'
import { Tab, Tabs, Grid, Cell,Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

class Projects extends Component{

    constructor(props){
        super(props);
        this.state = {activeTab:0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
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
                            <Button colored> Github </Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style ={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                </div>

            )
        } else if (this.state.activeTab === 1){
            return(
                <div><h1>This is android</h1></div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({activeTab: tabID})} ripple>
                    <Tab>React</Tab>
                    <Tab>Android</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }

}

export default Projects;