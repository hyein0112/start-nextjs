import { useEffect, useState } from "react";
import axios from "axios";
import Seo from "../components/Seo";

export default function Home() {
  const [movies, setMovies] = useState();

  const getData = async () => {
    await axios.get(`/api/movies`).then((data) => {
      console.log(data.data.results);
      setMovies(data.data.results);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Seo title="Home" />
      {!movies && <h1>Loading...</h1>}
      <div className="container">
        {movies?.map((movie) => (
          <div className="movie" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        ))}
      </div>
      <style jsx>{`
        h1 {
          display: block;
          text-align: center;
        }
        .container {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 10px;
          gap: 20px;
        }
        .movie {
          display: flex;
          flex-direction: column;
          padding: 15px;
          box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 12px;
          background: #ffffff;
          transition: transform 0.2s ease-in-out;
          box-sizing: border-box;
        }
        .movie:hover {
          transform: scale(1.04);
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
        @media only screen and (max-width: 510px) {
          .movie h4 {
            font-size: 14px;
          }
        }
        @media only screen and (max-width: 380px) {
          .movie h4 {
            font-size: 10px;
          }
        }
      `}</style>
    </>
  );
}
