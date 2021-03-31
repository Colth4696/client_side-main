import React from 'react'
import hands from './helping-hands.png'

const Header = (props) => {
    return (
        <div className="head">
            <div className="top-img">
            <img src={hands} alt="Hands"/>
            </div>
            <h1>NeighborAid</h1>
        </div>
    )
}

export default Header