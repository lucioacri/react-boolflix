import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ResultsContext = createContext();

function ResultsProvider({ children }) {
  const [resultsList, setResultsList] = useState([]);
  const [filmList, setFilmList] = useState([]);
  const [tvList, setTvList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const apiKey = import.meta.env.VITE_API_KEY;
  const movieUrl = "https://api.themoviedb.org/3/search/movie";
  const tvUrl = "https://api.themoviedb.org/3/search/tv";
  const apiParams = {
    api_key: apiKey,
    query: searchQuery,
  };

  const queryString = new URLSearchParams(apiParams).toString();

  useEffect(() => {
    axios
      .get(`${movieUrl}?${queryString}`)
      .then((res) => setFilmList(res.data.results));
  }, [searchQuery]);

  useEffect(() => {
    axios
      .get(`${tvUrl}?${queryString}`)
      .then((res) => setTvList(res.data.results));
  }, [searchQuery]);

  useEffect(() => {
    const combinedLists = [...filmList, ...tvList];
    setResultsList(combinedLists);
  }, [filmList, tvList]);
  return (
    <ResultsContext.Provider
      value={{ resultsList, filmList, tvList, searchQuery, setSearchQuery }}
    >
      {children}
    </ResultsContext.Provider>
  );
}

export { ResultsProvider, ResultsContext };
