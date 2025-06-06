import axios from "axios";
import { createContext, useState } from "react";

const ResultsContext = createContext();

function ResultsProvider({ children }) {
  const [filmList, setFilmList] = useState([]);
  const [tvList, setTvList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const search = () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const movieUrl = "https://api.themoviedb.org/3/search/movie";
    const tvUrl = "https://api.themoviedb.org/3/search/tv";
    const apiParams = {
      api_key: apiKey,
      query: searchQuery,
    };

    const queryString = new URLSearchParams(apiParams).toString();

    axios
      .get(`${movieUrl}?${queryString}`)
      .then((res) => setFilmList(res.data.results));

    axios
      .get(`${tvUrl}?${queryString}`)
      .then((res) => setTvList(res.data.results));
  };

  return (
    <ResultsContext.Provider
      value={{
        filmList,
        tvList,
        searchQuery,
        setSearchQuery,
        search,
      }}
    >
      {children}
    </ResultsContext.Provider>
  );
}

export { ResultsProvider, ResultsContext };
