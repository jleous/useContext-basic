import React, { useContext } from "react";
import MoviesContext from "../context/MoviesContext";
import Componente from "./Componente";

export default function Movies() {
  const { movies } = useContext(MoviesContext);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <ul className="list-group">
            {movies.map((movie) => (
              <li key={movie.id} className="list-group-item">
                {movie.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-8">
            <div className="card card-body">
                <Componente />
            </div>
        </div>

      </div>
    </div>
  );
}
