import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export default function Card({ result }) {
  const getFlagUrl = (language) => {
    const lang = language.toLowerCase();
    if (lang === "en") return "https://flagcdn.com/gb.svg";
    if (lang === "it") return "https://flagcdn.com/it.svg";
    return "https://flagcdn.com/un.svg";
  };

  const roundVote = (vote) => {
    return Math.round(vote / 2);
  };

  function starsCounter(vote) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon icon={i < vote ? solidStar : regularStar} key={i} />
      );
    }
    return stars;
  }
  return (
    <div className="col-4">
      <div className="card card-hover">
        <img
          src={`https://image.tmdb.org/t/p/w300${result.poster_path}`}
          alt={result.title || result.name}
          className="card-img-top"
        />

        <div className="card-body">
          <ul>
            <li>{result.title || result.name}</li>
            <li>
              Original Title: {result.original_title || result.original_name}
            </li>
            <li>
              Language:{" "}
              <img
                className="flag-img"
                src={getFlagUrl(result.original_language)}
                alt={result.original_language}
              />
            </li>
            <li>Vote: {roundVote(result.vote_average)} / 5</li>
            <li>{starsCounter(roundVote(result.vote_average))}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
