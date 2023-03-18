import React from "react";
const GenreFilter = ({ genres, onGenreChange }) => {
    return (
      <div className="genre">
        <h1>Filter by Genre</h1>
        {genres.map((genre) => (
          <button key={genre} onClick={() => onGenreChange(genre)}>
            {genre}
          </button>
        ))}
      </div>
    );
  };
  
  export default GenreFilter;