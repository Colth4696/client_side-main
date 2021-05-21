import axios from "axios";
import { relativeTimeThreshold } from "moment";
import React, { Component } from "react";

const Republish = (props) => {


    const handleSubmit = (event) => {
        event.preventDefault()
        const { request } = props;

        console.log(request);
        axios.patch(`http://localhost:3003/requests/${request.id}`, { fulfilled: false }, { withCredentials: true })
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    const updatedRequest = response.data.request;
                    props.reissueRequest(updatedRequest);
                }
            })
            .catch(error => {
                console.log("request error", error);
            });
    }


        return (
            <button onClick={handleSubmit}>Republish</button>
        )
    }

export default Republish;