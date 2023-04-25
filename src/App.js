import { useState } from "react";
import Movie from "./Movie";
import "./App.css";
// import Add from "./Add";
import moviedb from "./database.json";

const App = () => {
  const [poster, setPoster] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState();
  const [movies, setMovies] = useState(moviedb.movies);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, description, rating, poster };
    setMovies([...moviedb.movies, data]);
    console.log(movies);
  };

  const SearchHandler = (e) => {
    const element = e.target.value;
    setSearch(element);
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              value={search}
              onChange={SearchHandler}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <Movie input={search} />
      <div style={{ marginTop: "10px" }}>
        <form >
          <div className="row g-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                aria-label="Ttitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Poster"
                aria-label="Poster"
                value={poster}
                onChange={(e) => setPoster(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="rating"
                aria-label="Poster"
                value={rating}
                onChange={(e) => setRating(+e.target.value)}
              />
            </div>
          </div>
          <div className="form-floating" style={{ marginTop: "10px" }}>
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label htmlFor="floatingTextarea">Comments</label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "10px", marginLeft: "8px" }}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
