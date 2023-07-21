// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from "uuid";

const findGridSize = (gridSize) => {
  let width;
  switch (Number(gridSize)) {
    case 1:
      width = 4;
      break;
    case 2:
      width = 6;
      break;
    case 3:
      width = 8;
      break;
    default:
      width = 4;
  }
  return width;
};

const findTotalCards = (gridSize) => {
  let total;
  switch (Number(gridSize)) {
    case 1:
      total = 16;
      break;
    case 2:
      total = 36;
      break;
    case 3:
      total = 64;
      break;
    default:
      total = 16;
  }
  return total;
};

const randomizeNumbers = (N) => {
  const numbers = [];
  [...Array(N)].forEach(() => numbers.push(Math.floor(Math.random() * 100)));
  return numbers;
};

const shuffleCardsNumbers = (gridSize) => {
  const total = findTotalCards(gridSize); // determine grid size
  const numbers = randomizeNumbers(total / 2); // get random integers
  return [...numbers, ...numbers] // duplicate numbers to create pairs
    .sort(() => Math.random() - 0.5) // shuffle numbers
    .map((number) => ({ id: uuidv4(), value: number, isMatched: false })); // build card properties
};

export { findGridSize, shuffleCardsNumbers };
