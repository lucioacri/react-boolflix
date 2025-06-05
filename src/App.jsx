import { useState, useEffect } from "react";
import axios from "axios";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const [resultsList, setResultsList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = "https://api.themoviedb.org/3/search/movie";
  const apiParams = {
    api_key: apiKey,
    query: searchQuery,
  };

  const queryString = new URLSearchParams(apiParams).toString();

  useEffect(() => {
    axios
      .get(`${apiUrl}?${queryString}`)
      .then((res) => setResultsList(res.data.results));
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Main resultsList={resultsList} />
    </>
  );
}

export default App;
