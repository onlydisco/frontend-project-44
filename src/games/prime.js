import playBrainGames from '../index.js';
import { getRandomNumber } from '../random-number.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let answer = true;
  if (number === 0 || number === 1) {
    answer = false;
  } else if (number === 2) {
    answer = true;
  } else {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        answer = false;
      }
    }
  }
  return answer;
};

const getRound = () => {
  const minRandomNumber = 0;
  const maxRandomNumber = 99;
  const question = getRandomNumber(minRandomNumber, maxRandomNumber);

  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const playPrime = () => {
  playBrainGames(rules, getRound);
};

export default playPrime;
