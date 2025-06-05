import { useContext } from "react";
import { ResultsContext } from "../context/ResultsContext";

export default function Header() {
  const { searchQuery, setSearchQuery } = useContext(ResultsContext);

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </>
  );
}
