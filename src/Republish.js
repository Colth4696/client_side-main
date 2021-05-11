import axios from "axios";
import React, { Component } from "react";

class Republish extends Component {
    constructor() {
        super()
        this.state = {
            fulfilled: true,
        };
    }

    redirect = () => {
        window.location.reload();
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { request } = this.props;

        console.log(request);
        axios.patch(`http://localhost:3003/requests/${request.id}`, { fulfilled: false }, { withCredentials: true })
            .then(response => {
                console.log(response);
                if (response.data.status === 200) {
                    this.redirect('/')
                }
            })
            .catch(error => {
                console.log("request error", error);
            });
        event.preventDefault();
    }

    render() {

        return (
            <button onClick={this.handleSubmit}>Republish</button>
        )
    }
}

export default Republish;