import React from "react";
import axios from "axios";

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            availableRequests: 0,
            allRequests: this.props.allRequests
        }
    };

    componentDidMount() {
        axios.get("http://localhost:3003/requests")
            .then(response => {
                if (response.data) {
                    const allRequests = response.data && response.data.requests;
                    const availRequests = allRequests ? allRequests.filter(request => request.fulfilled !== true) : [];
                    this.setState({ availableRequests: availRequests.length });
                }
            })
    }

    render() {
        return (
            <div className="Counter">
                <h1>Available Tasks: {this.state.availableRequests} </h1>
            </div>
        )
    }
}

export default Counter;