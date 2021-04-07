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
    constructor(){
        super()
         this.state = {
          status: [],
          fulfilled: false 
    };

    this.toggleFulfilled=this.toggleFulfilled.bind(this)
    }

    toggleFulfilled = () => 
    {
        if (this.state.fulfilled=false){
            this.setState = ({
              fulfilled: false
            });
        }
        else{
           this.setState = ({
              fulfilled: true
        })
    }
  
     handleSubmit = (event) => {
    event.preventDefault()
    const {fulfilled, volunteer_id, request_id} = this.state
    let status = {
      volunteer_id: volunteer_id,
      request_id: request_id,
      fulfilled: fulfilled
    }
        axios.post("http://localhost:3003/request_statuses", {status}, {withCredentials: true})
        .then(response => {
            if (response.data.status === 'created') {
            this.props.status(response.data)
            this.redirect('/')            
        }
    })        
        .catch(error => {
            console.log("request error", error);
        });
        event.preventDefault();
    };
}
    
    render(){
        return <button onClick={this.toggleFulfilled, this.handleSubmit}>Fulfill Request{this.state.status}</button>
    }
}

export default FulfilledButton;
