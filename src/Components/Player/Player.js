import React from 'react';
import './Player.css';


export class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='boxed'>
                <div className='two rows'>
                    {/*Empty for Padding*/}
                </div>
                <div className='eight rows'>
                    Content
                </div>
                <div className='two rows'>
                    {/*Empty for Padding*/}
                </div>
            </div>
        )
    }
}