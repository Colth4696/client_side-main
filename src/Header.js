import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HowTo from './HowTo';
import hands from './helping-hands.png';

class Header extends Component {

 handleClick = () => {
        <HowTo/>
    }
    render() {
    return (
        <div className="head">
            <div className="top-img">
            <img src={hands} alt="Hands"/>
            </div>
            <h1>NeighborAid</h1>
            <div>
                <Link to='/HowTo' onClick={this.handleClick}>How To</Link>
            </div>
        </div>
    )
    }
}

export default Header