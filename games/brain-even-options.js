import { getRandomNumber } from '../src/index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameOptions = () => {
  const [minRandomNumber, maxRandomNumber] = [0, 99];
  const gameQuestion = getRandomNumber(minRandomNumber, maxRandomNumber);
  const gameCorrectAnswer = gameQuestion % 2 === 0 ? 'yes' : 'no';
  const gameValues = [gameQuestion, gameCorrectAnswer];
  return gameValues;
};

export { gameRules as rules, getGameOptions as options };
