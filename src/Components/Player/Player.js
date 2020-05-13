import React from 'react';
import './Player.css';


export class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {/*Empty to create padding*/}
                </div>

                <div className="row">
                    {/*Empty to create padding*/}
                </div>

                <div className = "row">
                </div>

                <div className = "row"> 
                </div> 

                <div className="row">
                    <div className="two columns">

                    </div>

                    <div className="eight columns">
                        <center>
                        <div className="boxed">
                                Content
                        </div>
                        </center>
                    </div>

                    <div className="two columns">
                        {/*Empty to create padding*/}
                    </div>
                </div>


            </div>
        )
    }
}