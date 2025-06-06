import Card from "./Card";
import { ResultsContext } from "../context/ResultsContext";
import { useContext } from "react";

export default function Main() {
  const { tvList, filmList } = useContext(ResultsContext);
  return (
    <div className="container">
      <div className="row">
        {filmList.map((result, index) => (
          <Card result={result} key={index} />
        ))}
      </div>
      <div className="row">
        {tvList.map((result, index) => (
          <Card result={result} key={index} />
        ))}
      </div>
    </div>
  );
}
