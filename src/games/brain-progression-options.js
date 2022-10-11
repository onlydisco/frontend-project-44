import { getRandomNumber } from '../random-number.js';

const rules = 'What number is missing in the progression?';

const getRandomProgression = (length, firstItem, step) => {
  const progressionArray = [];
  let newProgressionItem = firstItem;

  for (let i = 0; i < length; i += 1) {
    progressionArray.push(`${newProgressionItem}`);
    newProgressionItem += step;
  }

  return progressionArray;
};

const getOptions = () => {
  const progressionLength = 10;

  const minFirstProgressionItem = 0;
  const maxFirstProgressionItem = 99;
  const randomFirstProgressionItem = getRandomNumber(
    minFirstProgressionItem,
    maxFirstProgressionItem,
  );

  const minProgresssionStep = 2;
  const maxProgressionStep = 9;
  const randomProgressionStep = getRandomNumber(minProgresssionStep, maxProgressionStep);

  const interimProgressionArray = getRandomProgression(
    progressionLength,
    randomFirstProgressionItem,
    randomProgressionStep,
  );

  const randomHiddenItemIndex = getRandomNumber(0, interimProgressionArray.length);
  const correctAnswer = interimProgressionArray[randomHiddenItemIndex];
  interimProgressionArray[randomHiddenItemIndex] = '..';

  const question = interimProgressionArray.join(' ');

  return [question, correctAnswer];
};

export { rules, getOptions as options };
