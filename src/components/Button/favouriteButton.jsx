import "./button.css";
import {ReactComponent as StarFilled} from "./star-filled.svg";
import {ReactComponent as Star} from "./star.svg";
import { useState } from "react";


export default function FavoriteButton({id, name, className}) {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
            <button
                className={`${isActive ? 'active' : 'disabled'} ${className}`}
                aria-label="favorite"
                onClick={handleClick}
            >
              {name}
            </button>
    );
}
