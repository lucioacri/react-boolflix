import { useState } from "react";

export default function Header({ onSearch }) {
  const [search, setSearch] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    onSearch(search);
    setSearch("");
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </>
  );
}
