import React from 'react';
import './About.css';
var json = require('./about.json');



export class About extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {};
    }

/*
How this works for right now: 
We pass the name of the member we're wanting to fill the component from,
we use this name as a key in a JSON objet and this allows to fetch the artists
photo and bio.
*/ 


    render() { 
        switch(this.props.member) {
            case 'Ryan':
                return (
                    <div className='one-half column'>
                        <center><h1>Ryan</h1></center>
                        <center>  <img src={require('./lo.png')} /> </center>
                    </div>
                )
            case 'Curtis':
                return ( 
                    <div className = 'one-half column'>
                        <center><h1>Curtis</h1></center>
                        <center>
                            <img src={require('./lo.png')}/>
                        </center>
                        <center> {json.Curtis.Bio} </center>
                    </div> 
                )
            default:
                return (
                    <h1> No1 provided damn </h1>
                )
        }
    } 
}