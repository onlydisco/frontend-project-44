const gameRules = 'What is the result of the expression?';

const getGameOptions = () => {
  const randomRange = 100;
  const firstRandomNumber = Math.round(Math.random() * randomRange);
  const secondRandomNumber = Math.round(Math.random() * randomRange);

  const operators = ['+', '-', '*'];

  const getRandomOperator = (arr) => {
    const randomIndex = Math.round(Math.random() * operators.length);
    const randomOperator = arr[randomIndex];
    return randomOperator;
  };

  let gameQuestion = '';
  let gameCorrectAnswer = '';

  switch (getRandomOperator(operators)) {
    case '+':
      gameQuestion = `${firstRandomNumber} + ${secondRandomNumber}`;
      gameCorrectAnswer = (firstRandomNumber + secondRandomNumber).toString();
      break;
    case '-':
      gameQuestion = `${firstRandomNumber} - ${secondRandomNumber}`;
      gameCorrectAnswer = (firstRandomNumber - secondRandomNumber).toString();
      break;
    case '*':
      gameQuestion = `${firstRandomNumber} * ${secondRandomNumber}`;
      gameCorrectAnswer = (firstRandomNumber * secondRandomNumber).toString();
      break;
    default:
  }

  const gameValues = [gameQuestion, gameCorrectAnswer];
  return gameValues;
};

export { gameRules as rules, getGameOptions as options };
