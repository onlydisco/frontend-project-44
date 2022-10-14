import readlineSync from 'readline-sync';

const playBrainGames = (rules, getRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${rules}`);

  const roundsQuantity = 3;

  for (let i = 0; i < roundsQuantity; i += 1) {
    const [roundQuestion, correctRoundAnswer] = getRound();
    console.log(`Question: ${roundQuestion}`);
    const userRoundAnswer = readlineSync.question('Your answer: ');
    if (userRoundAnswer === correctRoundAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `"${userRoundAnswer}" is wrong answer ;(. Correct answer is "${correctRoundAnswer}".\nLet's try again, ${userName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playBrainGames;
