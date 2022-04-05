import React, { useEffect, useState } from "react";
import client from "../api/client";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLarg }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await client.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={base_url + (!isLarg ? movie.backdrop_path : movie.poster_path)}
            alt={movie.name}
            className={`row__poster ${isLarg && "row__posterLarg"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
