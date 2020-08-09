import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList({ movies, addToWatchList, handleViewed }) {

    return (
        <div className="movie-list">
            {movies.map(movie => {
                if(movie.poster_path){
                    return <MovieCard 
                        movie={movie} 
                        key={movie.id} 
                        addToWatchList={addToWatchList}
                    />
                }
            })}
        </div>
    )
}
