import playBrainGames from '../index.js';
import { getRandomNumber } from '../random-number.js';

const rules = 'What is the result of the expression?';

const calculate = (operator, firstNumber, secondNumber) => {
  let result = '';

  switch (operator) {
    case '+':
      result = (firstNumber + secondNumber).toString();
      break;
    case '-':
      result = (firstNumber - secondNumber).toString();
      break;
    case '*':
      result = (firstNumber * secondNumber).toString();
      break;
    default:
      break;
  }

  return result;
};

const getRound = () => {
  const minRandomNumber = 0;
  const maxRandomNumber = 99;
  const firstRandomNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
  const secondRandomNumber = getRandomNumber(minRandomNumber, maxRandomNumber);

  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, operators.length - 1);
  const randomOperator = operators[randomIndex];

  const question = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
  const correctAnswer = calculate(randomOperator, firstRandomNumber, secondRandomNumber);

  return [question, correctAnswer];
};

const playCalc = () => {
  playBrainGames(rules, getRound);
};

export default playCalc;
