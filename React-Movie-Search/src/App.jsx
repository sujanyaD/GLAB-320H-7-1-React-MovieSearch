import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//  import logo from "./logo.svg";

import "./App.css";
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

export default function App() {
  const apiKey = "98e3fb1f";
//state to hold movie data
  const [movie, setMovie] = useState(null);
// function to get movies
  const getMovie =async(searchTerm)=>{
//make fetch reuest and store response
    const response =await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    //parse JSON response into a Javascript object
    const data =await response.json();
    setMovie(data);
  }

  return (
    <div className='App'>
      {/* // passing getMovie as a prop for movieSearch */}
      <form moviesearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}


