import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = "https://api.themoviedb.org/3/search/movie";
  const apiParams = {
    api_key: apiKey,
    query: "ritorno",
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
      <div className="container">
        <div className="row">
          <div className="col">
            <ul>
              {resultsList.map((result, index) => (
                <li key={index}>{result.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
