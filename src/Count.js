import React, { Component } from "react";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

const Count = (props) => {
    return(
        <InfoBox>
        <h1>Available Tasks: {props.requests}</h1>
        </InfoBox>
    )
}

export default Count;