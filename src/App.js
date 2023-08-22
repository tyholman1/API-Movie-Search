import "./styles.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Movies from "./pages/Movies";
import Search from "./components/Search";
import axios from "axios";

export default function App() {
  const [movie, setMovie] = useState([null]);
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState(null);

  const params = useParams;
  const title = params.title;
  const country = "us";

  const getMovies = async function () {
    const options = {
      method: "GET",
      url: "https://streaming-availability.p.rapidapi.com/search/title",
      params: {
        title: "batman",
        country: "us",
        show_type: "all",
        output_language: "en"
      },
      headers: {
        "X-RapidAPI-Key": "3827aacff1msh20c979d1bd9f2cep139e8bjsn1052fa6a8abc",
        "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com"
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const moviesArr = [
      "Clueless",
      "Shrek",
      "Mars Attacks",
      "Predator",
      "Candyman"
    ];

    getMovies(moviesArr[Math.floor(Math.random() * moviesArr.length)]);
  }, [toggle]);

  return (
    <div className="App">
      <Search movieSearch={getMovies} />
      {error ? <h1>{error}</h1> : ""}
      <Movies movie={movie} />
    </div>
  );
}
