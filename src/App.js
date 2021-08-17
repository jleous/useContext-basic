import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import initialMovies from "./consts/initialMovies";
import MoviesContext from "./context/MoviesContext";

function App() {
  const movies = initialMovies;
  const data = { movies };
  return (
    <MoviesContext.Provider value={data}>
      <NavBar/>
      <Movies />
    </MoviesContext.Provider>
  );
}

export default App;
