import React, { useEffect, useState } from "react";
import requests from "../api/request";
import client from "../api/client";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await client.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  return (
    <header
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            https://image.tmdb.org/t/p/original/${movie?.backdrop_path}
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.orginal_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <p className="banner_description">{movie.overview}</p>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
