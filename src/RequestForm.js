import React, { Component } from "react";
import Geosuggest from 'react-geosuggest';
import axios from "axios"
import './RequestForm.css';

class RequestForm extends Component {
    constructor(props) {
        super(props);
        this.geosuggestEl = React.createRef();
        this.onSuggestSelect = this.onSuggestSelect.bind(this);
        this.state = {
            title: "",
            description: "",
            address: "",
            latitude: "",
            longitude: "",
            category: ""
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault()
        const { title, description, latitude, longitude, category } = this.state
        let request = {
            title: title,
            description: description,
            latitude: latitude,
            longitude: longitude,
            category: category
        }

        axios.post("http://localhost:3003/requests", { request },
            { withCredentials: true }
        )
            .then(response => {
                if (response.data.status === 'created') {
                    this.redirect()
                }
            })
            .catch(error => {
                console.error("request error", error);
            });
        event.preventDefault();
    };
    redirect = () => {
        window.location.reload();
    }
    onSuggestSelect = (suggest) => {
        if (suggest) {
            const { location } = suggest;
            this.setState({ latitude: location.lat, longitude: location.lng });
        }
    }

    render() {
        return (
            <div className="Task">
                <form>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        required
                    />

                    <br />

                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        required
                    />

                    <br />

                    <Geosuggest
                        ref={this.geosuggestEl}
                        onSuggestSelect={this.onSuggestSelect}
                    />

                    <br />

                    <div>

                        <input
                            type="text"
                            name="category"
                            placeholder="Material"
                            value={this.state.category}
                            onChange={this.handleChange} />
                    </div>

                    <br />

                    <button type="button" onClick={this.handleSubmit}>Submit</button>

                </form>
            </div>
        );
    }
}

export default RequestForm