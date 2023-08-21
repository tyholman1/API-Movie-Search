import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Search() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const params = useParams();
  const searchvalue = params.searchvalue;

  const [searchMovies, setSearchMovies] = useState([]);

  const getMovie = async () => {
    try {
      const url = `https://api.watchmode.com/v1/autocomplete-search/?${apiKey}&${searchvalue}`;
      const response = await axios.get(url);
      setSearchMovies(response.data[0]);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  const loaded = () => {
    return (
      <div>
        <h1 className="movie-search">
          {searchMovies.image_url}
          <h2>{searchMovies.name}</h2>
        </h1>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading....</h1>;
  };

  return searchMovies && searchMovies.name ? loaded() : loading();
}
