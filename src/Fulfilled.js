import axios from "axios";
import React, { Component }from "react";

// const FulfilledButton = () => {
//     const [isfulfilled, setIsFulfilled] = React.useState(false);
//     const republish = () => {
//         setIsFulfilled(value => !value);

// return (
//     <input
//         type="checkbox"
//         checked={isfulfilled}
//         onChange={republish}
//     />
// );
// }

// export default FulfilledButton;

class FulfilledButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fulfilled: false
        };
    }

    handleChange = (event) => {
        const {value} = event.target
        this.setState({
            value 
        })
    };

    handleSubmit = (event) => {
        event.preventDefault()
        const {fulfilled} = this.state
        let fulfill = {
            fulfilled: fulfilled
        }

        axios.post("http://localhost:3003/requests.fulfilled", {fulfill}, 
        { withCredentials: true })
        .then(response => {
            this.props.requests(response.data)
        })
        .catch(error => {
            console.log("requests error", error)
        });
        event.preventDefault();
    }

    render(){
        return(
            <div className="fulfilledbtn">
                <input 
                    type="checkbox"
                    checked={this.handleChange}
                    onChange={this.handleSubmit}>
                        FulFilled
                    </input>
            </div>
        )
    }
}

export default FulfilledButton;
