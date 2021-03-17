import React, { Component } from 'react';
import axios from 'axios'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirmation: '',
      image: null,
      errors: ''
     };
  }
handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
onImageChange = event => { 
    this.setState({ image: event.target.files[0] });
  };
handleSubmit = (event) => {
    event.preventDefault()
    const {first_name, last_name, email, password, password_confirmation, image } = this.state
    let user = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      image: image
    }
axios.post('http://localhost:3003/users', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.status === 'created') {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };
redirect = () => {
    this.props.history.push('/')
  }
handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}</ul> 
      </div>
    )
  }
render() {
    const {first_name, last_name, email, password, password_confirmation, image} = this.state
return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
        <input
            placeholder="first_name"
            type="text"
            name="first_name"
            value={first_name}
            onChange={this.handleChange}
          />
          <input
            placeholder="last_name"
            type="text"
            name="last_name"
            value={last_name}
            onChange={this.handleChange}
          />
          <input
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input 
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />
          <input 
            type="file" 
            accept="image/*" 
            multiple={false} 
            value={image}
            onChange={this.onImageChange} 
          />
        
          <button placeholder="submit" type="submit">
            Sign Up
          </button>
      
        </form>
        <div>
          {
            this.state.errors ? this.handleErrors() : null
          }
        </div>
      </div>
    );
  }
}
export default Signup;