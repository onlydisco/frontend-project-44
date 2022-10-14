import { getRandomNumber } from '../random-number.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRound = () => {
  const minRandomNumber = 0;
  const maxRandomNumber = 99;
  const question = getRandomNumber(minRandomNumber, maxRandomNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export { rules, getRound };
