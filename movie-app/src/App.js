import { useEffect, useState } from "react";
import "./App.css";
import MovieBox from "./MovieBox";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FormControl,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  Navbar,
  Nav,
  Form,
  Button,
} from "react-bootstrap";
// import AllMovies from "./AllMovies";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=7456c73e9c3c8952161aa28b27583a4d";
const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=7456c73e9c3c8952161aa28b27583a4d&query";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("searching...");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=7456c73e9c3c8952161aa28b27583a4d&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <container fluid>
          <NavbarBrand href="/home">MovieDb App</NavbarBrand>
          <NavbarBrand href="/home">Trending</NavbarBrand>
          <NavbarToggle aria-controls="navbarScroll"></NavbarToggle>

          <NavbarCollapse id="nabarScroll">
            <Nav
              className="me-auto my-2 my-lg-3"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>

            <Form className="d-flex" onSubmit={searchMovie}>
              <FormControl
                type="search"
                value={query}
                onChange={changeHandler}
                placeholder="Movie Search"
                className="me-2"
                aria-label="search"
                name=""
              ></FormControl>
              <Button variant="secondary" type="submit">
                Search
              </Button>
            </Form>
          </NavbarCollapse>
        </container>
      </Navbar>
      <div>
        {movies.length > 0 ? (
          <div className="container">
            <div className="grid">
              {movies.map((movieReq) => (
                <>
                <MovieBox key={movieReq.id} {...movieReq} />
                </>
                
              ))}
            </div>
          </div>
        ) : (
          <h2>Sorry !! No Movies Found</h2>
        )}
      </div>
    </>
  );
}

export default App;
