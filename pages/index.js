import { useEffect, useState } from "react";
import axios from "axios";
import Seo from "../components/Seo";

export default function Home() {
  const [movies, setMovies] = useState();

  const getData = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((data) => {
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
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </>
  );
}
