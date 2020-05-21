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
            
            case 'General': 
                    return(
                        <div>
                            <center>
                                <p>
                                    Locals Only Sound is a music collective founded by Gray Hawken and Curtis Smith. The product of
                                    friendship between Hawken and Smith, Locals Only Sound, was forged over a common interest in music. Inspired
                                    by staples of R&B and Soul music coupled with influences of electronic music; Hawken and Smith are writing, recording
                                    and releasing music that is simultaneously distinct and accessible. The duo's first mixtape titled Opus 1 is set
                                    for release later this year. Hawken and Smith's collaborative process on their EP led to the creation of a
                                    Toronto based production company under the saame name. Locals Only Sound offers a space for emerging artists
                                    access to resources, guidance and creative sounding boards. 
                                </p>
                            </center>
                            </div>
                    )
            default:
                return (
                    <h1> No1 provided damn </h1>
                )
        }
    } 
}