export default function Main({ resultsList }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ul>
            {resultsList.map((result, index) => (
              <li key={index}>
                {result.title}
                <ul>
                  <li>Original Title: {result.original_title}</li>
                  <li>Language: {result.original_language}</li>
                  <li>Vote: {result.vote_average}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
