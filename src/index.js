import readlineSync from 'readline-sync';

const playBrainGames = (rules, options) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${rules}`);

  const playRound = () => {
    const [roundQuestion, correctRoundAnswer] = options();
    console.log(`Question: ${roundQuestion}`);
    const userRoundAnswer = readlineSync.question('Your answer: ');
    const isRoundWon = userRoundAnswer === correctRoundAnswer;
    return [isRoundWon, userRoundAnswer, correctRoundAnswer];
  };

  const roundsQuantity = 3;

  for (let i = 0; i < roundsQuantity; i += 1) {
    const [isWon, userAnswer, correctAnswer] = playRound(options);

    if (isWon === true) {
      console.log('Correct!');
    } else {
      console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer is "${correctAnswer}".\nLet's try again, ${userName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playBrainGames;
