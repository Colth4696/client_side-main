import axios from "axios";
import React, { Component }from "react";

// const FulfilledButton = () => {
// const [isfulfilled, setIsFulfilled] = React.useState(false);
// const republish = () => {
// setIsFulfilled(value => !value);

// return (
// <input
// type="checkbox"
// checked={isfulfilled}
// onChange={republish}
// />
// );
// }

// export default FulfilledButton;

class FulfilledButton extends Component {
constructor(){
super()
this.state = {
fulfilled: false,
};

this.toggleFulfilled=this.toggleFulfilled.bind(this)
}

toggleFulfilled = () => {
const { fulfilled } = this.state;
this.setState({fulfilled: !fulfilled});
}

handleSubmit = (event) => {
this.toggleFulfilled();
const {fulfilled} = this.state
const { request, volunteer } = this.props;
// let status = {
// volunteer_id: volunteer.id,
// request_id: request.id,
// fulfilled: fulfilled
// }

console.log(request);
axios.patch(`http://localhost:3003/requests/${request.id} ${volunteer.id}`, {fulfilled: !fulfilled}, {withCredentials: true})
.then(response => {
console.log(response);
if (response.data.status === 200) {
console.log(response.data);
// this.props.status(response.data)
this.redirect('/')
}
})
.catch(error => {
console.log("request error", error);
});
}
render() {
if (this.state.fulfilled === true) {
    return (
        <button onClick={this.handleSubmit}>Republish</button>
    )
}
else {
    return(
        <button onClick={this.handleSubmit}>Fulfill Request</button>  
    )
}
}
}

export default FulfilledButton;
