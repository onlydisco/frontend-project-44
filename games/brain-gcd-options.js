import { getRandomNumber } from '../src/index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGameOptions = () => {
  const [minRandomNumber, maxRandomNumber] = [0, 99];
  const [firstRandomNumber, secondRandomNumber] = [
    getRandomNumber(minRandomNumber, maxRandomNumber),
    getRandomNumber(minRandomNumber, maxRandomNumber),
  ];

  const gameQuestion = `${firstRandomNumber} ${secondRandomNumber}`;

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

  const gameCorrectAnswer = getTheGreatestCommonDivisor(
    firstRandomNumber,
    secondRandomNumber,
  ).toString();

  const gameValues = [gameQuestion, gameCorrectAnswer];
  return gameValues;
};

export { gameRules as rules, getGameOptions as options };
