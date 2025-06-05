import Card from "./Card";
import { ResultsContext } from "../context/ResultsContext";
import { useContext } from "react";

export default function Main() {
  const { resultsList } = useContext(ResultsContext);
  return (
    <div className="container">
      <div className="row">
        {resultsList.map((result, index) => (
          <Card result={result} key={index} />
        ))}
      </div>
    </div>
  );
}
