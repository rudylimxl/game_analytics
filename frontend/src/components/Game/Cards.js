import React from "react";
import classnames from "classnames";
import "./Cards.css";

const back = "https://storage.googleapis.com/rudy_general_assembly_seif/assets/Daggers.png"

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={back} alt="pokeball" />
      </div>
      <div className="card-face card-back-face">
        <img src={card.url} alt="pokeball" />
      </div>
    </div>
  );
};

export default Card;
