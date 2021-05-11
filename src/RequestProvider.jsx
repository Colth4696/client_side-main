import * as React from "react";

export const RequestContext = React.createContext(undefined);

export const withRequests = (Comp) => (props) => (
<RequestContext.Consumer>
{(context) => <Comp requests={context.requests} setRequests={context.setRequests} {...props} />}
</RequestContext.Consumer>
);

export const RequestProvider = (props) => {

const context = {
requests: props.requests,
setRequests: props.setRequests
};

return (
<RequestContext.Provider value={context}>
{props.children}
</RequestContext.Provider>
);
};

export default RequestProvider;