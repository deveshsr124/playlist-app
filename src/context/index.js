import React, { createContext, useContext, useReducer } from "react";

// creating data context
export const DataContext = createContext();

export const DataContextProvider = ({ intialState, reducer, children }) => {
	//making data context provider so that it can be used further in app
	return (
		<DataContext.Provider value={useReducer(reducer, intialState)}>
			{children}
		</DataContext.Provider>
	);
};

// returns context/global state values
export const useDataContextValue = () => useContext(DataContext);
