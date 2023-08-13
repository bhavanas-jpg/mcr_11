
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Movies from './pages/Movies'
import StarredMovies from './pages/StarredMovies'
import WatchList from './pages/WatchList'
import MovieDetails from './pages/MovieDetails'
import AddMovieForm from './components/AddMovieForm'

function App() {
 

  return (
    <>
   
     <Routes>
     <Route path="/" element={<Movies/>}/>
     <Route path="/watchlist" element={<WatchList />}/>
     <Route path="/starredMovies" element={<StarredMovies />}/>
     <Route path="/movieDetails/:id"  element={<MovieDetails/>} />
     <Route path="/addMovie" element={<AddMovieForm/>}/>
     </Routes>
    </>
  )
}

export default App
