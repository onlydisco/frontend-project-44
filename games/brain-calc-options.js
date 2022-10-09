import { getRandomNumber } from '../src/index.js';

const gameRules = 'What is the result of the expression?';

const getGameOptions = () => {
  const [minRandomNumber, maxRandomNumber] = [0, 99];
  const [firstRandomNumber, secondRandomNumber] = [
    getRandomNumber(minRandomNumber, maxRandomNumber),
    getRandomNumber(minRandomNumber, maxRandomNumber),
  ];

  const operators = ['+', '-', '*'];

  const getRandomOperator = (arr) => {
    const [minRandomIndex, maxRandomIndex] = [0, arr.length - 1];
    const randomIndex = getRandomNumber(minRandomIndex, maxRandomIndex);
    const randomOperator = arr[randomIndex];
    return randomOperator;
  };

  let gameQuestion = '';
  let gameCorrectAnswer = '';

  switch (getRandomOperator(operators)) {
    case '+':
      gameQuestion = `${firstRandomNumber} + ${secondRandomNumber}`;
      gameCorrectAnswer = (firstRandomNumber + secondRandomNumber).toString();
      break;
    case '-':
      gameQuestion = `${firstRandomNumber} - ${secondRandomNumber}`;
      gameCorrectAnswer = (firstRandomNumber - secondRandomNumber).toString();
      break;
    case '*':
      gameQuestion = `${firstRandomNumber} * ${secondRandomNumber}`;
      gameCorrectAnswer = (firstRandomNumber * secondRandomNumber).toString();
      break;
    default:
  }

  const gameValues = [gameQuestion, gameCorrectAnswer];
  return gameValues;
};

export { gameRules as rules, getGameOptions as options };
