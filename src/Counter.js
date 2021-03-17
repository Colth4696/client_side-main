import React from "react";
import MyMarker from "./MyMarker"
import axios from "axios";

class Counter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      requests: [],
  }
};

componentDidMount() {
 axios.get("http://localhost:3003/requests")
  .then(response => {
      if (response.data){
    console.log(response.data)
    this.setState({ requests: response.data.length});
  }})
  }

  render() {
    return (
      <div>
          <h1>Available Tasks: {this.state.requests} </h1>
      </div>
    )
  }
}

export default Counter;