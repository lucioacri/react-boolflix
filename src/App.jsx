import { useState, useEffect } from "react";
import axios from "axios";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = "https://api.themoviedb.org/3/search/movie";
  const apiParams = {
    api_key: apiKey,
    query: "il sh",
  };

  const queryString = new URLSearchParams(apiParams).toString();

  const [resultsList, setResultsList] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}?${queryString}`)
      .then((res) => setResultsList(res.data.results));
  }, []);
  return (
    <>
      <Header />
      <Main resultsList={resultsList} />
    </>
  );
}

export default App;
