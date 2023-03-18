
import './App.css';
import MovieList from './components/MovieList';
import GenreFilter from './components/GenreFilter';
import React, { useState } from "react";
import { movies } from './components/MovieList';
function App() {
  const [genreFilter, setGenreFilter] = useState(null);
  
  const filteredMovies = genreFilter 
    ? movies.filter((movie) => movie.genre === genreFilter)
    : movies;
    
  const genres = [...new Set(movies.map((movie) => movie.genre))];
  
  return (
    <div className="container">
      <h1>Top 15 Movies of All Time</h1>
      <GenreFilter genres={genres} onGenreChange={setGenreFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
