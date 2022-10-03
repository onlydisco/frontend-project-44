import readlineSync from 'readline-sync';

const playBrainGames = (rules, options) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${rules}`);

  const playRound = () => {
    const [roundQuestion, correctRoundAnswer] = options();
    const userRoundAnswer = readlineSync.question(`Question: ${roundQuestion} `);
    console.log(`Your answer: ${userRoundAnswer}`);
    const isRoundWon = userRoundAnswer === correctRoundAnswer;
    const roundValues = [isRoundWon, userRoundAnswer, correctRoundAnswer];
    return roundValues;
  };

  const roundsQuantity = 3;
  let pointsCount = 0;

  for (let i = 0; i < roundsQuantity; i += 1) {
    const [isWon, userAnswer, correctAnswer] = playRound();

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
