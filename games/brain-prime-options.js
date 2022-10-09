const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  let answer = 'yes';
  if (number === 0 || number === 1) {
    answer = 'no';
  } else if (number === 2) {
    answer = 'yes';
  } else {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        answer = 'no';
      }
    }
  }
  return answer;
};

const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

const getGameOptions = () => {
  const [minRandomNumber, maxRandomNumber] = [0, 99];
  const gameQuestion = getRandomNumber(minRandomNumber, maxRandomNumber);

  const gameCorrectAnswer = isPrimeNumber(gameQuestion);

  const gameValues = [gameQuestion, gameCorrectAnswer];
  return gameValues;
};

export { gameRules as rules, getGameOptions as options };
