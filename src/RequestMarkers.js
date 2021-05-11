
import React from "react";
import MyMarker from "./MyMarker"
import axios from "axios";
import { withRequests } from "./RequestProvider";

class RequestMarkers extends React.Component {
  constructor(props) {
    super(props)
    this.fulfillRequest = this.fulfillRequest.bind(this);
    this.state = {
      requests: [],
    }
  };

  componentDidMount() {
    console.log(this.props.requests);
    // axios.get("http://localhost:3003/requests")
    //   .then(response => {
    //     console.log(response.data)
    // let currentRequests = this.props.requests && this.props.requests.filter(req => !req.fulfilled);
    // this.setState({ requests: currentRequests });
    this.setRequests(this.props.requests);
    //   })
  }

  setRequests = (allRequests) => {
    let currentRequests = this.props.requests && this.props.requests.filter(req => !req.fulfilled);
    this.setState({ requests: currentRequests });
  }

  fulfillRequest = (request) => {
    const allRequests = this.props.requests;
    for (let index = 0; index < allRequests.length; index++) {
      if (allRequests[index].id === request.id) {
        allRequests.splice(index, 1);
        break;
      }
    }
    // this.setState({ requests: allRequests });
    this.props.setRequests(allRequests);
    this.setRequests(allRequests);
  }

  render() {
    return (
      <div>
        {this.state.requests && this.state.requests.map(request => {
          return (<MyMarker position={{ lat: +request.latitude, lng: +request.longitude }}
            title={request.title}
            description={request.description}
            request={request}
            key={request.id}
            request_id={request.id}
            user={this.props.user}
            fulfillRequest={this.fulfillRequest} />)
        })
        }
      </div>
    )
  }
}

export default withRequests(RequestMarkers);

