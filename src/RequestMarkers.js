import React from "react";
import MyMarker from "./MyMarker"
import { useRequestState } from "./RequestStateProvider";

const RequestMarkers = (props) => {
  const [state, dispatch] = useRequestState();
  const [requests, setRequests] = React.useState();

  React.useEffect(() => {
    let currentRequests = state.requests && state.requests.filter(req => !req.fulfilled);
    setRequests(currentRequests);
  }, [state])

  const fulfillRequest = (request) => {
    const allRequests= state.requests;
    for (let index=0; index<allRequests.length; index++) {
      if (allRequests[index].id === request.id) {
        allRequests[index] = request;
        break;
      }
    }
    dispatch({ type: "UPDATE_REQUESTS", requests: allRequests });
  }

  return (
    <div>
      {requests && requests.map(request => {
        return (<MyMarker position={{ lat:+request.latitude, lng:+request.longitude }}
          title={request.title} 
          description={request.description}
          request={request}
          key={request.id} 
          request_id={request.id}
          user={props.user}
          fulfillRequest={fulfillRequest}/>)
      })
      }
    </div>
  )
}

export default RequestMarkers;