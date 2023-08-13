import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { useData } from '../context/DataContext';

const MovieDetails = () => {
    const {id} = useParams();
    const {moviesData, dispatch, handleStar, handleWatchList } = useData();

    const movie = moviesData.find(movie=> movie?.id === Number(id) )
   const {imageURL, title, year, genre, rating, director, writer, cast, summary} = movie;

  return (
    <div>
        <Navbar />
        <div className="container">
        <div className="movie__detail">
            <div>
             <img src={imageURL} alt="movie-image" 
             width={200} height={200}

             />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{summary}</p>
                <p>Year: {year}</p>
                <p>Genre: 
                    {genre.map(item => <span >{item} , </span>)}
                </p>
                <p>Rating: {rating}</p>
                <p>Director: {director} </p>
                <p>Writer: {writer}</p>
                <p>Cast: 
                {cast.map(item => <span >{item} , </span>)}
                </p>
                <div className="btn__container">
                <button     
          onClick={()=>{
            handleStar(movie?.id)
            dispatch({
              type: "ADD_STAR",
              payload: movie
            })
          }}
          >
           {movie?.star ? "Starred" : "Star" } </button>
          <button
          onClick={()=>{
            handleWatchList(movie?.id)
            dispatch({
              type: "ADD_WATCHLIST",
              payload: movie
            })
          }}
          >
          {movie?.watchlist ? " Added to WatchList" : " Add to WatchList" }
            </button>
                </div>
              
            </div>
        </div>
        </div>
       

    </div>
  )
}

export default MovieDetails