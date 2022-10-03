const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameOptions = () => {
  const randomRange = 100;
  const gameQuestion = Math.floor(Math.random() * randomRange);
  const correctAnswer = gameQuestion % 2 === 0 ? 'yes' : 'no';
  const gameValues = [gameQuestion, correctAnswer];
  return gameValues;
};

export { gameRules as rules, gameOptions as options };
