import React from "react";
import { useState } from "react";
import moviedb from "./database.json";

const Add = () => {
  const [poster, setPoster] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState();


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, description, rating, poster };
    moviedb.movies.push(data);
    console.log(moviedb.movies);
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <form action="" onSubmit={handleSubmit}>
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
  );
};

export default Add;
