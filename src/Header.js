import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import hands from './helping-hands.png';

class Header extends Component {

    render() {
        return (
            <div className="head">
                <div className="top-img">
                    <img src={hands} alt="Hands" />
                </div>
                <h1>NeighborAid</h1>
            </div>
        )
    }
}

export default Header