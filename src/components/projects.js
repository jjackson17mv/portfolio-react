import React, {Component} from 'react';
import {Tab, Tabs, Grid, Cell, Card, CardTitle,CardActions,CardText, Button,CardMenu, IconButton} from 'react-mdl'



class Projects extends Component {
constructor(props) {
    super(props);
    this.state = {activeTab: 0};

}

toggleCategories() {

if(this.state.activeTab === 0) {
    return(
        //Project 1
        <Card shadow={5} style={{minWidth: '450', margin:"auto"}}>
            <CardTitle style={{color: '#fff', height:'176px',background:'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}React Project ></CardTitle>
            <CardText>
                My React project conist of 
            </CardText>
            <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
                </CardActions>
            <CardMenu style={{color:'#fff'}}>
                <IconButton name = "share"/>
                </CardMenu>
        </Card>
    )
}else if(this.state.activeTab === 1) {
    return(

       <Card shadow={5} style={{minWidth: '450', margin:"auto"}}>
            <CardTitle style={{color: '#fff', height:'176px',background:'url(https://xebialabs.com/wp-content/uploads/files/tool-chest/mongodb.jpg) center / cover'}}React Project ></CardTitle>
            <CardText>
                This is Mongo DB used as a storage and purchase system
            </CardText>
            <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
                </CardActions>
            <CardMenu style={{color:'#fff'}}>
                <IconButton name = "share"/>
                </CardMenu>
        </Card>
    )
}else if(this.state.activeTab === 2) {
    return(
        <Card shadow={5} style={{minWidth: '450', margin:"auto"}}>
            <CardTitle style={{color: '#fff', height:'176px',background:'url(https://scotch-res.cloudinary.com/image/upload/w_1500,q_auto:good,f_auto/v1540545426/tzs50mjrlopv85r3qjpq.jpg) center / cover'}}React Project ></CardTitle>
            <CardText>
                This is my MERN stack application that uses image recognition to search and store nutrients of food
            </CardText>
            <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
                </CardActions>
            <CardMenu style={{color:'#fff'}}>
                <IconButton name = "share"/>
                </CardMenu>
        </Card>
    )
    

}else if(this.state.activeTab === 3) {
    return(
        <Card shadow={5} style={{minWidth: '450', margin:"auto"}}>
            <CardTitle style={{color: '#fff', height:'176px',background:'url(https://www.gomyitguy.com/wp-content/uploads/2014/09/mysql-logo.jpg) center / cover'}}React Project ></CardTitle>
            <CardText>
                MySQl is used to create a 
            </CardText>
            <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
                </CardActions>
            <CardMenu style={{color:'#fff'}}>
                <IconButton name = "share"/>
                </CardMenu>
        </Card>
    )

}

}


    render() {
        return(
            <div className="category-tabs" >
            <Tabs activeTab = {this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple >
                <Tab>ReacT</Tab>
                <Tab>Mongo DB</Tab>
                <Tab>MERN stack</Tab>
                <Tab>MySQl</Tab>
                </Tabs>

                
                    <Grid className="projects-grid">
                        <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                
                </div>
        )
    }
}



export default Projects;