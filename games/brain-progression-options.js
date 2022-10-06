const gameRules = 'What number is missing in the progression?';

const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

const getRandomProgression = () => {
  const [minProgresssionStep, maxProgressionStep] = [2, 9];
  const randomProgressionStep = getRandomNumber(minProgresssionStep, maxProgressionStep);

  const progressionArray = [];
  const progressionLength = 10;
  const [minFirstProgressionItem, maxFirstProgressionItem] = [0, 99];
  const randomFirstProgressionItem = getRandomNumber(
    minFirstProgressionItem,
    maxFirstProgressionItem,
  );

  let newProgressionItem = randomFirstProgressionItem;

  for (let i = 0; i < progressionLength; i += 1) {
    progressionArray.push(`${newProgressionItem}`);
    newProgressionItem += randomProgressionStep;
  }

  return progressionArray;
};

const getGameOptions = () => {
  const interimProgressionArray = getRandomProgression();
  const randomHiddenItem = getRandomNumber(0, interimProgressionArray.length);
  const gameCorrectAnswer = interimProgressionArray[randomHiddenItem];
  interimProgressionArray[randomHiddenItem] = '..';

  const gameQuestion = interimProgressionArray.join(', ');

  const gameValues = [gameQuestion, gameCorrectAnswer];
  return gameValues;
};

export { gameRules as rules, getGameOptions as options };
