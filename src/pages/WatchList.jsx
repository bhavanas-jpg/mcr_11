import React, { useEffect } from 'react'
import { useData } from '../context/DataContext';
import Navbar from '../components/Navbar';

const WatchList = () => {
  const {state,   handleWatchList,handleStar, moviesData} = useData();


   const getStarMovie = moviesData.filter(movie => movie?.watchlist);



  return (
    <div>
      <Navbar />
   <h3>WatchList Movies</h3>
   
   <div className="movie__container">
        {getStarMovie.map((movie) => (
          <div key={movie.id} className="card">
            <img
              src={movie?.imageURL}
              onClick={() => navigate(`/movieDetails/${movie?.id}`)}
              alt="movie-image"
              width={200}
              height={200}
            />
            <h3>{movie?.title}</h3>
            <p>{movie?.summary}</p>
            <div className="btn__container">
              <button
                onClick={() => {
                  handleStar(movie?.id);
                  // dispatch({
                  //   type: "ADD_STAR",
                  //   payload: movie,
                  // });
                }}
              >
                {movie?.star ? "Starred" : "Star"}{" "}
              </button>
              <button
                onClick={() => {
                  handleWatchList(movie?.id);
                  // dispatch({
                  //   type: "ADD_WATCHLIST",
                  //   payload: movie,
                  // });
                }}
              >
                {movie?.watchlist ? " Added to WatchList" : " Add to WatchList"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WatchList;