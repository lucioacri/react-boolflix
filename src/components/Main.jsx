import Card from "./Card";

export default function Main({ resultsList }) {
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
