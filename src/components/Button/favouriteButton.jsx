import "./button.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";
import { useState } from "react";

export default function FavoriteButton() {
  // this should be a state variable
  const [isFavorite, setFavorite] = useState(false);

  return (
    <button
      className="favorite-button"
      onClick={() => {
        setFavorite((current) => !current);
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
