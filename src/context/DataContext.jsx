import { createContext, useContext, useReducer } from "react";
import DataReducer from "../reducer/DataReducer";

export const DataContext = createContext(null);

export const DataProvider =({children})=>{
  const {initialState, reducer} = DataReducer();
  const [state, dispatch] = useReducer(reducer, initialState);


    let name="Bhavana";
return(
    <DataContext.Provider
    value={{
        name,
        state, 
        dispatch
    
    }}
    >
        {children}
    </DataContext.Provider>
)
}

export const useData=()=> useContext(DataContext);