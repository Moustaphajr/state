import React from "react";
import moviedb from "./database.json";
import { Link } from "react-router-dom";


const Movie = ({ input }) => {
  const Search = moviedb.movies.filter((ele) =>
    ele.title.toLowerCase().includes(input.toLowerCase())
  );
  return (
    <div className="parent">
      {Search.map((ele) => (
        <div class="card" style={{ width: "18rem" }}>
          <img src={ele.poster} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{ele.title}</h5>
            <p class="card-text">{ele.description}</p>
            <button className="btn btn-primary">
              <Link to={`/detail/${ele.title}`} className="text-white">
                details
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Movie;
