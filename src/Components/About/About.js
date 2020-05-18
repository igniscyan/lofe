import React from 'react';
import './About.css';


export class About extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {}; 
        this.background = []; 
    }

/*
How this works for right now: 
We pass the name of the member we're wanting to fill the component from,
we use this name as a key in a JSON objet and this allows to fetch the artists
photo and bio.
*/ 


    render() { 
        return (
            <div className = 'one-half column'>
                <h1>{this.props.member}</h1> 
                <p>
                    This is where the bio goes
                </p>
            </div>
        )
    } 
}