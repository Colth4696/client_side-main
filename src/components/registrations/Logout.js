import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Logout extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    axios.delete('http://localhost:3003/logout', { withCredentials: true })
      .then(response => {
        this.props.handleLogout()
        this.props.history.push('/')
      })
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div className="LoginPage" style={{ backgroundImage: `url(${Houses})` }}>
        {
          this.props.loggedInStatus ?
            <Link to='/logout' onClick={this.handleClick}>Log Out</Link> :
            null
        }
      </div>
    )
  }
}

export default Logout;