import React from "react";
import { useData } from "../context/DataContext";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const {
    state,
    dispatch,
    searchValue,
    moviesData,
    handleStar,
    handleWatchList,
  } = useData();
  const navigate = useNavigate();
  const {genre, year, rating} = state;

 const genres = ["All Genre","Drama","Crime", "Action", "Adventure", "Fantasy", "Romance", "Sci-Fi", "Action", "Biography"];
 const years= [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
 const ratings= [1, 2,3,4,5,6,7,8,9,10]


  let searchedMovies =
    searchValue.length !== 0
      ? moviesData.filter(
          (movie) =>
            movie?.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            movie?.director.toLowerCase().includes(searchValue.toLowerCase()) ||
            movie?.cast.some((castItem) =>
              castItem.toLowerCase().includes(searchValue.toLowerCase())
            )
        )
      : moviesData;

 let genreFilteredMovies = genre !== "All Genre" ? searchedMovies.filter(movie => movie?.genre.some(item => item ===  genre) )  : searchedMovies;
 let releaseYearFilteredMovies = year !== "0" ? genreFilteredMovies.filter(movie => movie?.year === Number(year)) : genreFilteredMovies;
 let ratingFilteredMovies = rating !== "0" ? releaseYearFilteredMovies.filter(movie => movie?.rating === Number(rating)  ):releaseYearFilteredMovies;

 
  return (
    <div >
      <Navbar />
     
     <div className="container">
      <div className="filter__sec">
      <div>
        <select name="genreSelect" id="genreSelect"
        onChange={(e)=>dispatch({
          type: "FILTER_GENRE",
          payload: e.target.value
        })}
        >
          {genres.map(genre => 
            <option value={genre}> {genre}</option>)}
        </select>
      </div>
      <div>
        <select 
        value={state.year}
        onChange={(e)=>dispatch({
          type: "FILTER_YEAR",
          payload: e.target.value
        })}
        name="yearSelect" id="yearSelect">
          <option value="0">Releases year</option>
          {years.map(year => 
            <option value={year}> {year}</option>)}
        </select>
      </div>
      <div>
        <select name="ratingsSelect" id="ratingsSelect"
          onChange={(e)=>dispatch({
            type: "FILTER_RATING",
            payload: e.target.value
          })}
        >
        <option value="0">rating</option>
          {ratings.map(rating => 
            <option value={rating}> {rating}</option>)}
        </select>
      </div>
     <div>
      <button 
      onClick={()=>navigate("/addMovie")}
      >Add a movie</button>
     </div>
      </div>
  

    
     <div className="movie__container">
        {ratingFilteredMovies.map((movie) => (
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
                  dispatch({
                    type: "ADD_STAR",
                    payload: movie,
                  });
                }}
              >
                {movie?.star ? "Starred" : "Star"}{" "}
              </button>
              <button
                onClick={() => {
                  handleWatchList(movie?.id);
                  dispatch({
                    type: "ADD_WATCHLIST",
                    payload: movie,
                  });
                }}
              >
                {movie?.watchlist ? " Added to WatchList" : " Add to WatchList"}
              </button>
            </div>
          </div>
        ))}
      </div>
     </div>
    
     
      
    </div>
  );
};

export default Movies;
