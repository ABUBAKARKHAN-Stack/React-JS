import React from 'react'
import { Link } from 'react-router-dom';

function MovieCard({ movieDetail }) {
    const { Poster, Title, Type, Year, imdbID } = movieDetail;
    return (
        <div className='w-[150px] h-auto border bg-white text-black flex items gap-y-4 items-center flex-col p-2 '>
            <img src={Poster} alt={Title} className='w-20' />
            <div className='text-xs flex flex-col gap-x-3'>
                <p className='font-bold'>{Title}</p>
                <p className='text-zinc-500'>{Type}</p>
                <p className='text-zinc-500'>{Year}</p></div>
            <Link className='px-6 py-2 bg-black text-white' to={`/movies/${imdbID}`}>View</Link>
        </div>
    )
}

export default MovieCard