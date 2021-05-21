import React from "react";
import { useRequestState } from "./RequestStateProvider";

const Counter = () => {
  const [state] = useRequestState();
  const [availableRequests, setAvailableRequests] = React.useState();

  React.useEffect(() => {
    const allRequests = state.requests;
    const availRequests = allRequests
      ? allRequests.filter((request) => request.fulfilled !== true)
      : [];
    setAvailableRequests(availRequests.length);
  }, [state])

  return (
    <div className="Counter">
      <h1>Available Tasks: {availableRequests} </h1>
    </div>
  );
}

export default Counter;