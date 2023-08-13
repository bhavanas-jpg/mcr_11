
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Explore from './pages/Explore'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <>
    <Navbar />
     <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/explore" element={<Explore />}/>
     </Routes>
    </>
  )
}

export default App
