// import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import { useGameContext } from "../contexts/GameContext";

import Card from "./Card";

import * as Init from "../helpers/initGame";

export default function GridCards() {
  const { gameInfo } = useGameContext();

  const [grid, setGrid] = useState(null);
  const [cards, setCards] = useState([]);

  const [moves, setMoves] = useState(null);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const handleChoice = (card) => {
    if (choiceOne) setChoiceTwo(card);
    else setChoiceOne(card);
  };

  const resetChoice = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setMoves((prev) => prev + 1);
  };

  const setMatch = (choice) => {
    const updatedCards = [...cards].reduce((acc, card) => {
      return card.value === choice
        ? [...acc, { ...card, isMatched: !card.isMatched }]
        : [...acc, card];
    }, []);
    setCards(updatedCards);
  };

  // initialize game
  useEffect(() => {
    setMoves(0); // init number of moves
    if (Object.keys(gameInfo).length) {
      const {
        settings: { grid_size: gridSize },
      } = gameInfo;
      setCards(Init.shuffleCardsNumbers(gridSize)); // shuffle cards
      setGrid(Init.findGridSize(gridSize)); // set CSS class based on grid size
    }
  }, [gameInfo]);

  // compare selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      const isMatched = choiceOne.value === choiceTwo.value;
      if (!isMatched) setTimeout(() => resetChoice(), 700);
      else {
        setMatch(choiceOne.value);
        resetChoice();
      }
    }
  }, [choiceOne, choiceTwo]);

  return (
    <div className={`card__grid ${grid ? `grid__layout__${grid}` : ""}`}>
      {grid && cards.length ? (
        cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            isCardFlipped={
              card === choiceOne || card === choiceTwo || card.isMatched
            }
            onCardPick={handleChoice}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
