import * as React from "react";
import RequestProvider from "./RequestProvider";
import axios from "axios";

const LOADING_STATE = {
LOADING: "loading",
LOADED: "loaded",
ERROR: "error"
};

const RequestLoader = (props) => {
const [loadingState, setLoadingState] = React.useState(LOADING_STATE.LOADING);
const [requests, setRequests] = React.useState();

React.useEffect(() => {
axios.get("http://localhost:3003/requests")
.then(response => {
let currentRequests = response && response.data && response.data.requests;//.filter(req => !req.fulfilled);
setRequests(currentRequests);
setLoadingState(LOADING_STATE.LOADED);
})
.catch(error => {
console.error(`Error: ${error.message}`)
setLoadingState(LOADING_STATE.ERROR);
})
}, []);

switch (loadingState) {
case LOADING_STATE.LOADING:
return <div>Loading...</div>;
case LOADING_STATE.LOADED:
return (
<RequestProvider
children={props.children}
requests={requests}
setRequests={setRequests}
/>
);
case LOADING_STATE.ERROR:
<div>An Error occured, please refresh the page. If the error continues please contact the owner.</div>
return null;
default:
return null;
}
};

export default RequestLoader;