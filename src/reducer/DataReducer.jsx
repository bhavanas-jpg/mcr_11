import React from "react";
import { movies } from "../data/movies";
const DataReducer = () => {
  const initialState = {
    data: (() => JSON.parse(localStorage.getItem("moviesData")) || movies)(),
    starMovies: (() => JSON.parse(localStorage.getItem("starMoviesData")) || [])(),
    watchListMovies: [],
    genre: "All Genre",
    year: "0",
    rating: "0",
  };

  const reducer = (state, action) => {
    switch (action.type) {
    //   case "ADD_STAR":
    //     return {
    //       ...state,
    //       starMovies: [...state.starMovies, action.payload],
    //     };
    //   case "ADD_WATCHLIST":
    //     return {
    //       ...state,
    //       watchListMovies: [...state.watchListMovies, action.payload],
    //     };
      case "FILTER_GENRE":
        return {
          ...state,
          genre: action.payload,
        };
      case "FILTER_YEAR":
        return {
          ...state,
          year: action.payload,
        };
      case "FILTER_RATING":
        return {
          ...state,
          rating: action.payload,
        };
      case "ADD_MOVIE":
        return{
        ...state,
        data: [...state.data, action.payload]
        }
    case "ADD_DATA":
        return{
            ...state,
            data: action.payload
        }
      default:
        return state;
    }
  };

  return { initialState, reducer };
};

export default DataReducer;
