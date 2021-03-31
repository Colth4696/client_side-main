import React from "react";
import MyMarker from "./MyMarker"
import axios from "axios";

class Counter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      requests: [],
  }
  }

componentDidMount() {
 axios.get("http://localhost:3003/requests")
  .then(res => {
    console.log(res.data)
    const task = res.data;
    const taskSize = res.data.length;
    this.setState({ task, taskSize });
  })
}
      

  render() {
    return (
      <div className="Counter">
          <h1>Available Tasks: {this.state.requests.taskSize} </h1>
      </div>
    );
  }
}

export default Counter;