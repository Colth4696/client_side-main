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
volunteer: []
};

// this.toggleFulfilled=this.toggleFulfilled.bind(this)
}

// toggleFulfilled = () => {
// const { fulfilled } = this.state;
// this.setState({fulfilled: !fulfilled});
// }

handleSubmit = (event) => {
event.preventDefault()
const { request } = this.props;
const { volunteer } = this.state;

console.log(request);
axios.patch(`http://localhost:3003/requests/${request.id} ${volunteer.id}`, {fulfilled: true}, {withCredentials: true})
.then(response => {
console.log(response);
if (response.data.status === 200) {
this.redirect()
}
})
.catch(error => {
console.log("request error", error);
});
event.preventDefault();
};
redirect = () => {
    window.location.reload();
}

render() {

    return(
        <button onClick={this.handleSubmit}  fulfilled={this.state.fulfilled}>Fulfill Request</button>  
    )
}
}


export default FulfilledButton;
