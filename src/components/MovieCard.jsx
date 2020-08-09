import React, { useState } from 'react'
import { BsFillPlayFill } from 'react-icons/bs'

export default function MovieCard({ movie, addToWatchList }) {

    const url = `https://www.youtube.com/results?search_query=${movie.title}`

    return (
        <div className="movie-card">
            <img className="movie-image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} 
                alt={movie.title}
            />
            <div>
                <h3 className="movie-title">{movie.title}</h3>
                <div className="extra-notes">
                     <p><span>Release Date:</span> {movie.release_date}</p>
                     <p><span>Rating:</span> {movie.vote_average}</p>
                </div>
                <p id="movie-overview">{movie.overview}</p>
                <div className="card-button">
                    <button onClick={addToWatchList} value={movie.title}>Add to Watch List</button>
                    <button id="viewed-button">Add to Viewed</button>
                    <a href={`https://www.youtube.com/results?search_query=${movie.title}+trailer`} target="_blank" id="play-icon">
                        <BsFillPlayFill size={24} />
                    </a>
                </div>
            </div>
        </div>
    )
  
}