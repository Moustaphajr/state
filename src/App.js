import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import moviedb from "./database.json";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [detailmovie] = useState(moviedb.movies);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:title" element={<Detail Detail={detailmovie} />} />
    </Routes>
  );
};
export default App;
