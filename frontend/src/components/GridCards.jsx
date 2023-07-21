import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import { useGameContext } from "../contexts/GameContext";

import Card from "./Card";

import * as Init from "../helpers/initGame";

export default function GridCards({ incrementMoves, endGame }) {
  const { gameInfo } = useGameContext();

  const [grid, setGrid] = useState(null);
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [isCardDisabled, setIsCardDisbaled] = useState(false);

  const handleChoice = (card) => {
    if (choiceOne) setChoiceTwo(card);
    else setChoiceOne(card);
  };

  const resetChoice = () => {
    incrementMoves();
    setChoiceOne(null);
    setChoiceTwo(null);
    setIsCardDisbaled(false);
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
      setIsCardDisbaled(true); // prevents flipping other cards
      const isMatched =
        choiceOne.value === choiceTwo.value && choiceOne.id !== choiceTwo.id; // prevent double clicking on a card
      if (!isMatched) setTimeout(() => resetChoice(), 800);
      else {
        setMatch(choiceOne.value);
        resetChoice();
      }
    }
  }, [choiceOne, choiceTwo]);

  // check for end game
  useEffect(() => {
    const hasGameEnded = cards.length && cards.every((card) => card.isMatched);
    if (hasGameEnded) endGame();
  }, [cards]);

  return (
    <div className={`card__grid ${grid ? `grid__layout__${grid}` : ""}`}>
      {grid && cards.length ? (
        cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            isFlipped={
              card === choiceOne || card === choiceTwo || card.isMatched
            }
            isDisabled={isCardDisabled}
            onCardPick={handleChoice}
          />
        ))
      ) : (
        <p>Shuffling Cards...</p>
      )}
    </div>
  );
}

GridCards.propTypes = {
  incrementMoves: PropTypes.func.isRequired,
  endGame: PropTypes.func.isRequired,
};
