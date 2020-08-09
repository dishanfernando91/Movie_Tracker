import React, { useState, useEffect } from 'react';
import './App.css'
import SearchMovie from './components/SearchMovie';
import MovieList from './components/MovieList';
import TrackerPanel from './components/TrackerPanel';

const watchedMovies = localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [];

function App() {

  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState([])
  const [watchList, setWatchList] = useState(watchedMovies)
  // const [viewed, setViewed] = useState([])

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList))
  })

  const searchMovie = e => {
    e.preventDefault()

    const url = `https://api.themoviedb.org/3/search/movie?api_key=b799e6560643f85ec070d262c4a723d2&language=en-US&query=${query}&page=1&include_adult=false`;

    if(query){
      try {
        fetch(url)
          .then(response => response.json())
          .then(data => { 
            setMovies(data.results)
        })
      } catch(error) { console.log(error) }
    } else {
      console.log("Entry invalid.")
    }
  }

  const handleChange = e => {
    setQuery(e.target.value)
  } 

  const addToWatchList = e => {
    const { value } = e.target;
    if(!watchList.includes(value)){
      setWatchList([...watchList, value])}
    }
    
    const handleRemoveWatched = watchedMovie => {
      const updatedList = watchList.filter(movie => {
        if(movie !== watchedMovie){
          return movie
        }
      })
        setWatchList(updatedList)
    }

    const watchedList = watchList.map(movie => {
      return <TrackerPanel movie={movie} handleRemoveWatched={handleRemoveWatched}/>
    })

    // const handleViewed = movie => {
    //   setViewed(
    //     [...viewed, movie]
    //   )
    // }

    // const handleRemoveViewed = watchedMovie => {
    //   const updatedList = watchList.filter(movie => {
    //     if(movie !== watchedMovie){
    //       return movie
    //     }
    //   })
    //     setWatchList(updatedList)
    // }

    // const viewedMovies = viewed.map(movie => {
    //   return <TrackerPanel movie={movie}  />
    // })


    return (
      <>
        <div className="header">
            <h1>Movie Tracker</h1>
            <hr/>
            <p>Keep track of movies you watched, and ones you want to watch</p>
          </div>

        <div className="main-wrapper">
          <div className="wrapper">
            <SearchMovie searchMovie={searchMovie} handleChange={handleChange} />
            <MovieList 
              movies={movies} 
              addToWatchList={addToWatchList}
              // handleViewed={handleViewed}
            />
            </div>
          {watchList.length > 0 ? 
            <div className="watched-movies"> 
              <h4 className="to-watch-title">To Watch</h4> 
              {watchedList}
            </div>
            : <h4></h4>}
          </div>
      </>
  );
}

export default App;
