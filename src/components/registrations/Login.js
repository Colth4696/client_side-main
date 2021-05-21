import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Houses from '../../576140.jpg'
import Header from '../../Header';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      email: '',
      password: '',
      errors: ''
    };
  }
  componentWillMount() {
    return this.props.loggedInStatus ? this.redirect() : null
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  };
  handleSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state
    let user = {
      email: email,
      password: password
    }

    axios.post('http://localhost:3003/login', { user }, { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
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
        <ul>
          {this.state.errors.map(error => {
            return <li key={error}>{error}</li>
          })
          }
        </ul>
      </div>
    )
  }
  render() {
    const { email, password } = this.state
    return (
      <div className="LoginPage" style={{ backgroundImage: `url(${Houses})` }}>
        <Header />
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <br />
          <div className="SignBtn">
            <button placeholder="submit" type="submit">
              Log In
          </button>
          </div>
          <div>
            or <Link to='/signup'>sign up</Link>
          </div>

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
export default Login;