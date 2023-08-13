import React from 'react'
import { Link } from 'react-router-dom'
import { useData } from '../context/DataContext'

const Navbar = () => {
const {searchValue, setSearchValue} = useData();


  return (
    <nav>
     <div>
      <span>IMDB</span>
     </div>
     <div>
      <input type="search" 
      value={searchValue}
      placeholder="Search movies title , cast and director"
      onChange={(e)=>setSearchValue(e.target.value)}
      />
     </div>
      <div>
      <Link to="/" >Movies</Link>
        <Link to="/watchlist" > Watch List</Link>
        <Link to="/starredMovies" > Starred Movies</Link>
      </div>
        
    </nav>
  )
}

export default Navbar