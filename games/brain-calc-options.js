const gameRules = 'What is the result of the expression?';

const getGameOptions = () => {
  const randomRange = 100;
  const firstRandomNumer = Math.floor(Math.random() * randomRange);
  const secondRandomNumer = Math.floor(Math.random() * randomRange);

  const operators = ['+', '-', '*'];

  const getRandomOperator = (arr) => {
    const randomIndex = Math.floor(Math.random() * operators.length);
    const randomOperator = arr[randomIndex];
    return randomOperator;
  };

  let gameQuestion = '';
  let gameCorrectAnswer = '';

  switch (getRandomOperator(operators)) {
    case '+':
      gameQuestion = `${firstRandomNumer} + ${secondRandomNumer}`;
      gameCorrectAnswer = (firstRandomNumer + secondRandomNumer).toString();
      break;
    case '-':
      gameQuestion = `${firstRandomNumer} - ${secondRandomNumer}`;
      gameCorrectAnswer = (firstRandomNumer - secondRandomNumer).toString();
      break;
    case '*':
      gameQuestion = `${firstRandomNumer} * ${secondRandomNumer}`;
      gameCorrectAnswer = (firstRandomNumer * secondRandomNumer).toString();
      break;
    default:
  }

  const gameValues = [gameQuestion, gameCorrectAnswer];
  return gameValues;
};

export { gameRules as rules, getGameOptions as options };
