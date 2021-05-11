import axios from "axios";
import React, { Component } from "react";

class FulfilledButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fulfilled: false,
            volunteer: []
        };
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { request } = this.props;
        const { volunteer } = this.state;

        console.log(request);
        axios.patch(`http://localhost:3003/requests/${request.id} ${volunteer.id}`, { fulfilled: true }, { withCredentials: true })
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    // this.redirect()
                    const updatedRequest = response.data.request;
                    this.props.fulfillRequest(updatedRequest);
                }
            })
            .catch(error => {
                console.log("request error", error);
            });
        event.preventDefault();
    };

    render() {

        return (
            <button onClick={this.handleSubmit}>Fulfill Request</button>
        )
    }
}


export default FulfilledButton;
