import React, { createContext, useReducer, useContext } from "react"

const RequestContext = createContext();

export function RequestStateProvider({ reducer, initialState, children }) {
  const value = useReducer(reducer, initialState);
  return <RequestContext.Provider value={value} children={children} />
}

export function useRequestState() {
  return useContext(RequestContext);
}