import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import { getMovies } from '../services/GetService'

function Movie() {
  const [Movie, setMovie] = useState([])

  // const API = "https://www.omdbapi.com/?s=Titanic&apikey=3e53cc40"

  useEffect(() => {
    async function getMovie() {
      try {
        const data = await getMovies()
        setMovie(data.data.Search)
        console.log(data.data.Search);

      } catch (error) {
        console.log("Error Message", error.message);
      }

    }

    getMovie()
  }, [])

  return (
    <div className='grid grid-cols-4 gap-4 '>
      {
        Movie.map((movie) => (
          <MovieCard movieDetail={movie} key={movie.imdbID} />
        ))
      }
    </div>
  )
}

export default Movie