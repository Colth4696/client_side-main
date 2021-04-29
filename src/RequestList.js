import React, { useState } from "react";
import axios from "axios";
import Republish from "./Republish";

function RequestList(props){
    const[requests, setRequests]= useState();
    const[fulfilled, setFulfilled]= useState();
    const[visible, setVisible]= useState(false);

    const apiURL = "http://localhost:3003/requests"; 

     const fetchData = async () => {
        const response = await axios.get(apiURL)
        console.log(response.data)
        setRequests(response.data.requests)
        setFulfilled(response.data.fulfilled)
        
    }
    React.useEffect(() => {
        fetchData();
    }, []) 

    if (fulfilled === true){
        return(
           null
        )
    }
    return(
        <div className="List">
        <div className="RequestList">
            {requests && requests.map((request, index, fulfilled) => {
                return(
                    <div className="task" key={index}>
                        <h3>Request {index + 1}</h3>
                        <h3>Owner ID: {request.user_id}</h3>
                        <h2>{request.title}
                        <div className="FilledButton">
                            <Republish  request={request} fulfilled={fulfilled} />
                        </div>
                        </h2>
                    </div>

                )
            })}
        </div>
        </div>
    )
}

export default RequestList;