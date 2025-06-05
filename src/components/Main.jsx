export default function Main({ resultsList }) {
  return (
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
  );
}
