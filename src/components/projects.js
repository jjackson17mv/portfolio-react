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
            <CardTitle style={{color: '#fff', height:'230px',background:'url(https://firebase.google.com/images/brand-guidelines/logo-vertical.png) center / cover'}}React Project ></CardTitle>
            <CardText>
                Firebase,Google Maps API are used with javascript,jQuery to CRUD method recreational pick up games within a given location. Directions are provided.
            </CardText>
            <CardActions border>
                <Button colored  href="https://github.com/loganbertrand/pick-up-games">Github</Button>
                <Button colored href="https://loganbertrand.github.io/pick-up-games/">Live Demo</Button>
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
                <Button colored href="https://github.com/jjackson17mv/mongo-hw">Github</Button>
                <Button colored href="https://limitless-dusk-25612.herokuapp.com/">Live Demo</Button>
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
           MERN stack is used to store nutritional information of food by using image recognition of real-time photos.
            </CardText>
            <CardActions border>
                <Button colored href="https://github.com/HowardKuo/Calorie-Watch">Github</Button>
                <Button colored  href="https://calorie-watch.herokuapp.com" target="_blank">Live Demo</Button>
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
                MySQl is used to create data storing and deleting. CRUD method.
            </CardText>
            <CardActions border>
                <Button href="https://github.com/jjackson17mv/burger"colored>Github</Button>
                <Button href="https://aqueous-waters-62827.herokuapp.com/" target="_blank" colored>Live Demo</Button>
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

                
                    <Grid className="projects-grid" >
                        <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                
                </div>
        )
    }
}



export default Projects;