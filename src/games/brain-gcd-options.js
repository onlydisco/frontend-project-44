import { getRandomNumber } from '../random-number.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getTheGreatestCommonDivisor = (firstNumber, secondNumber) => {
  if (!firstNumber || !secondNumber) {
    return firstNumber + secondNumber;
  }

  let firstInterimNumber = Math.abs(firstNumber);
  let secondInterimNumber = Math.abs(secondNumber);

  while (secondInterimNumber) {
    const thirdInterimNumber = secondInterimNumber;
    secondInterimNumber = firstInterimNumber % secondInterimNumber;
    firstInterimNumber = thirdInterimNumber;
  }
  return firstInterimNumber;
};

const getOptions = () => {
  const minRandomNumber = 0;
  const maxRandomNumber = 99;
  const firstRandomNumber = getRandomNumber(minRandomNumber, maxRandomNumber);
  const secondRandomNumber = getRandomNumber(minRandomNumber, maxRandomNumber);

  const question = `${firstRandomNumber} ${secondRandomNumber}`;

  const correctAnswer = getTheGreatestCommonDivisor(
    firstRandomNumber,
    secondRandomNumber,
  ).toString();

  return [question, correctAnswer];
};

export { rules, getOptions as options };
