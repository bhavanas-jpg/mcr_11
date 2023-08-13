import { createContext, useContext, useEffect, useReducer, useState } from "react";
import DataReducer from "../reducer/DataReducer";

export const DataContext = createContext(null);

export const DataProvider =({children})=>{
  const {initialState, reducer} = DataReducer();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [moviesData, setMoviesData] = useState(JSON.parse(localStorage.getItem("moviesData")) || state.data);
  const [searchValue, setSearchValue] = useState("");


  useEffect(()=>{
    localStorage.setItem("moviesData", JSON.stringify(state.data));
    setMoviesData(state.data)
}, [state.data])


    const handleStar=(id)=>{
        const updatedmoviesData = state.data.map(movie=> movie.id === id ? {...movie, star: movie?.star ? false : true} : movie);
        setMoviesData(updatedmoviesData )
        dispatch({type:"ADD_DATA", payload:updatedmoviesData })
        }
        const handleWatchList =(id)=>{
            const updatedmoviesData = state.data.map(movie=> movie.id === id ? {...movie, watchlist: movie?.watchlist ? false : true} : movie);
            setMoviesData(updatedmoviesData )
            dispatch({type:"ADD_DATA", payload:updatedmoviesData })
            }

   
return(
    <DataContext.Provider
    value={{
        moviesData,
        state, 
        dispatch,
        searchValue,
        setSearchValue,
        handleStar,
        handleWatchList
    
    }}
    >
        {children}
    </DataContext.Provider>
)
}

export const useData=()=> useContext(DataContext);

/**
 * const [inventoryData, setInventoryData] = useState(JSON.parse(localStorage.getItem("inventoryData")) || state.data);
    const [filterContainer, setFilterContainer] = useState(true);


    useEffect(()=>{
      localStorage.setItem("inventoryData", JSON.stringify(state.data));
  }, [state.data])

 */