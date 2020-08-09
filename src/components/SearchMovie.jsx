import React from 'react'

export default function SearchMovie({ searchMovie, handleChange }) {
    return (
        <div className="searchBar">
            <form onSubmit={searchMovie}>
                <input type="text" placeholder="e.g. Pacific Rim" name="query" onChange={handleChange}></input>
                <button>Search Movie</button>
            </form>
        </div>
    )
}
