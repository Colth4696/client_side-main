import React, { useState } from "react";
import axios from "axios";
import FulfilledButton from "./Fulfilled";

function RequestList(props){
    const[requests, setRequests]= useState();

    const apiURL = "http://localhost:3003/requests"; 

     const fetchData = async () => {
        const response = await axios.get(apiURL)

        setRequests(response.data)

    }

    return(
        <div className="List">
        <div className="ListButton">
            <button onClick={fetchData}>
                Get My Tasks
            </button>
        </div>
        <div className="RequestList">
            {requests && requests.map((request, index) => {
                return(
                    <div className="task" key={index}>
                        <h3>Request {index + 1}</h3>
                        <h2>{request.title}</h2>
                        <div className="FilledButton">
                            <FulfilledButton  requests={requests} setRequests={setRequests} user={props.user}/>
                        </div>
                    </div>

                )
            })}
        </div>
        </div>
    )
}
export default RequestList;