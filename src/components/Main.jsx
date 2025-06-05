export default function Main({ resultsList }) {
  const getFlagUrl = (language) => {
    const lang = language.toLowerCase();
    if (lang === "en") return "https://flagcdn.com/gb.svg";
    if (lang === "it") return "https://flagcdn.com/it.svg";
    return "https://flagcdn.com/un.svg";
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ul>
            {resultsList.map((result, index) => (
              <li key={index}>
                {result.title || result.name}
                <ul>
                  <li>
                    Original Title:{" "}
                    {result.original_title || result.original_name}
                  </li>
                  <li>
                    Language:{" "}
                    <img
                      className="flag-img"
                      src={getFlagUrl(result.original_language)}
                      alt={result.original_language}
                    />
                  </li>
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
