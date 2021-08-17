import React, { useContext } from "react";
import MoviesContext from "../context/MoviesContext";

export default function Componente() {
  const { movies } = useContext(MoviesContext);
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.id}</li>
        ))}
      </ul>
    </div>
  );
}
