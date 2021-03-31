import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from './Header'
import Dashboard from './components/registrations/Dashboard';
import Houses from './576140.jpg';
import Footer from './Footer';

class Home extends Component {
  constructor(props){
  super(props)
  }
  
 handleClick = () => {
    axios.delete('http://localhost:3003/logout', {withCredentials: true})
    .then(response => {
      this.props.handleLogout()
      this.props.history.push('/')
    })
    .catch(error => console.log(error))
  }
  render(){
return (
    <div className="HomePage">
   <div className="HomeStatus">
       <Header/>
       <br></br>
       { 
        this.props.loggedInStatus ? 
        <Link to='/logout' onClick={this.handleClick}>Log Out</Link> : 
        null
      }
   </div>
   
    <div className="Landing" style={{backgroundImage: `url(${Houses})`}}>
      {
        !this.props.loggedInStatus ?
      <Link to='/login'>Log In</Link> :
      null
      }
    <br></br>
      {
        !this.props.loggedInStatus ?
    <Link to='/signup'>Sign Up</Link> :
    null
      }
    {
    this.props.loggedInStatus ?      
    <Dashboard user={this.props.user}/>: 
    null
    }
    <div className="Bottom">
    <Footer />
    </div>
    </div>
    </div>
  );
}
};
export default Home;
