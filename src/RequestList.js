import React, { useState } from "react";
import Republish from "./Republish";
import moment from "moment";
import { useRequestState } from "./RequestStateProvider";

function RequestList(props){
    const [state, dispatch] = useRequestState();
    const[requests, setRequests]= useState();


     const fetchData = async (allRequests) => {
        let currentRequests = [];
        currentRequests = allRequests && allRequests.filter(request => {
            const allowRepublish = moment(request.updated_at).isBetween(moment().subtract(1,'days'),moment());
            return request.user_id === props.user.id && allowRepublish && request.fulfilled;
        });
        setRequests(currentRequests)        
    }

    React.useEffect(() => {
        fetchData(state.requests);
    }, [state]) 

    const reissueRequest = (request) => {
        const allRequests= state.requests;
        for (let index=0; index<allRequests.length; index++) {
          if (allRequests[index].id === request.id) {
            allRequests[index] = request;
            break;
          }
        }
        dispatch({ type: "UPDATE_REQUESTS", requests: allRequests });
      }  

    return(
        <div className="List">
        <div className="RequestList">
            {requests && requests.length > 0 ? requests.map((request, index) => {
                return(
                    <div className="task" key={index}>
                        <h3>Request {index + 1}</h3>
                        <h3>Owner ID: {request.user_id}</h3>
                        <h2>{request.title}
                        <div className="FilledButton">
                            <Republish  reissueRequest={reissueRequest} request={request} />
                        </div>
                        </h2>
                    </div>

                )
            })
        : 
            <div className="task">
                <h3>There are no tasks to re-issue at this time.</h3>
            </div>
        }
        </div>
        </div>
    )
}

export default RequestList;