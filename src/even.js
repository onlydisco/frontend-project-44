import readlineSync from 'readline-sync';

const playEvenNumbersGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let pointsCount = 0;

  const gameRound = () => {
    const factor = 100;
    const randomNumber = Math.floor(Math.random() * factor);

    let correctAnswer = 'no';
    if (randomNumber % 2 === 0) {
      correctAnswer = 'yes';
    }

    let roundResult = true;

    const userAnswer = readlineSync.question(`Question: ${randomNumber} `);
    console.log(`Your answer: ${userAnswer}`);

    if (userAnswer === correctAnswer) {
      pointsCount += 1;
      console.log('Correct!');
    } else {
      roundResult = false;
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer is "${correctAnswer}".\nLet's try again, ${userName}!`);
    }

    return roundResult;
  };

  const result = gameRound();

  for (let i = 0; i < 3; i += 1) {
    if (pointsCount === 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    if (result === false) {
      return;
    }
    gameRound();
  }
};

export default playEvenNumbersGame;
