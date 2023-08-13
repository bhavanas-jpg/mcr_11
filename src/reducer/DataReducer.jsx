import React from 'react'

const DataReducer = () => {
    const initialState={
        place: "Bangalore"
    }

    const reducer =(state,action)=>{
   switch(action.type){


   default:
    return state;
   }
    }

    return {initialState, reducer}
  
}

export default DataReducer