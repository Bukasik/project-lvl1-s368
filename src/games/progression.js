import gameFrame from '..';
import randomNum from '../utils';
import { cons } from 'hexlet-pairs';

const instruction = 'What number is missing in this progression?';

const getData = () => {
  const lengthOfProgression = 10;
  const step = randomNum(1, 5);
  const start = randomNum(1, 10);
  const finish = start + (lengthOfProgression - 1) * step;
  const replacementIndex = randomNum(1, 10);
  const correctAnswer = start + (replacementIndex - 1) * step;
  let question = '';
  for (let progression = start; progression <= finish; progression += step) {
    if (progression === correctAnswer) {
      question += '.. ';
      progression += step;
    }
    question += `${progression} `;
  }
  return cons(question, String(correctAnswer));
};

export default() => gameFrame(instruction, getData);
