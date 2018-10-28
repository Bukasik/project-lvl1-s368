import gameFrame from '..';
import randomNum from '../utils';
import { cons } from 'hexlet-pairs';

const instruction = 'What number is missing in this progression?';
const lengthOfProgression = 10;

const getData = () => {
  const step = randomNum(1, 10);
  const start = randomNum(1, 10);
  const replacementIndex = randomNum(1, 10);
  const correctAnswer = start + (replacementIndex - 1) * step;
  let question = '';
  for (let i = 0; i < lengthOfProgression; i += 1) {
    const element = start + step * i;
    if (element === correctAnswer) {
      question += '.. ';
    } else {
      question += `${start + step * i} `;
    }
  }
  return cons(question, String(correctAnswer));
};

export default() => gameFrame(instruction, getData);
