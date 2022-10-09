import readlineSync from 'readline-sync';

export const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

const sayHello = (gameRules) => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  console.log(`${gameRules}`);
  return user;
};

const playRound = (gameOptions) => {
  const [roundQuestion, correctRoundAnswer] = gameOptions();
  const userRoundAnswer = readlineSync.question(`Question: ${roundQuestion} `);
  console.log(`Your answer: ${userRoundAnswer}`);
  const isRoundWon = userRoundAnswer === correctRoundAnswer;
  const roundValues = [isRoundWon, userRoundAnswer, correctRoundAnswer];
  return roundValues;
};

const playBrainGames = (rules, options) => {
  const userName = sayHello(rules);

  const roundsQuantity = 3;
  let pointsCount = 0;

  for (let i = 0; i < roundsQuantity; i += 1) {
    const [isWon, userAnswer, correctAnswer] = playRound(options);

    if (isWon === true) {
      console.log('Correct!');
      pointsCount += 1;
    } else {
      console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer is "${correctAnswer}".\nLet's try again, ${userName}!`,
      );
      return;
    }

    if (pointsCount === 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
  }
};

export default playBrainGames;
