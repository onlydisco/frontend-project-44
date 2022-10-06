const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameOptions = () => {
  const randomRange = 100;
  const gameQuestion = Math.round(Math.random() * randomRange);
  const gameCorrectAnswer = gameQuestion % 2 === 0 ? 'yes' : 'no';
  const gameValues = [gameQuestion, gameCorrectAnswer];
  return gameValues;
};

export { gameRules as rules, getGameOptions as options };
