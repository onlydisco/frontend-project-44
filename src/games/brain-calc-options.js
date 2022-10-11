import { getRandomNumber } from '../random-number.js';

const rules = 'What is the result of the expression?';

const getOptions = () => {
  const minRandomNumber = 0;
  const maxRandomNumber = 99;
  const firstRandomNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
  const secondRandomNumber = getRandomNumber(minRandomNumber, maxRandomNumber);

  const operators = ['+', '-', '*'];

  const randomIndex = getRandomNumber(0, operators.length - 1);
  const randomOperator = operators[randomIndex];

  const question = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
  let correctAnswer = '';

  switch (randomOperator) {
    case '+':
      correctAnswer = (firstRandomNumber + secondRandomNumber).toString();
      break;
    case '-':
      correctAnswer = (firstRandomNumber - secondRandomNumber).toString();
      break;
    case '*':
      correctAnswer = (firstRandomNumber * secondRandomNumber).toString();
      break;
    default:
  }

  return [question, correctAnswer];
};

export { rules, getOptions as options };
