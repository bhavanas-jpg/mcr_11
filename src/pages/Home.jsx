import React from 'react'
import { useData } from '../context/DataContext';

const Home = () => {
  const {name, state} = useData();
  return (
    <div>
    <p>Home</p>
    <p>{name}</p>
    <p>{state.place}</p>

    </div>
  )
}

export default Home