import * as React from "react";
import { RequestStateProvider } from "./RequestStateProvider";
import axios from "axios";
import requestReducer from "./RequestReducer";

const LOADING_STATE = {
    LOADING: "loading",
    LOADED: "loaded",
    ERROR: "error"
};

const RequestLoader = (props) => {
    const [loadingState, setLoadingState] = React.useState(LOADING_STATE.LOADING);
    const [initialState, setInitialState] = React.useState({requests: []});

    React.useEffect(() => {
        axios.get("http://localhost:3003/requests")
        .then(response => {
            let currentRequests = response && response.data && response.data.requests;//.filter(req => !req.fulfilled);
            setInitialState({ requests: currentRequests });
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
            <RequestStateProvider
                children={props.children}
                reducer={requestReducer} 
                initialState={initialState}
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