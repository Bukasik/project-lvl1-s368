import gameFrame from '..';
import randomNum from '../randFunc';
import { cons } from 'hexlet-pairs';

const instruction = 'What number is missing in this progression?';

const getData = () => {
  const lengthOfProgression = 10;
  const step = randomNum(1, 5);
  const firstNumProgression = randomNum(1, 10);
  const secondNumProgression = firstNumProgression + (lengthOfProgression - 1) * step;
  const replacementIndex = randomNum(1, 10);
  const correctAnswer = firstNumProgression + (replacementIndex - 1) * step;


  const progression = (firstNum) => {
    const iter = (counter, acc) => {
      if (counter === correctAnswer) {
        return iter(counter + step, acc += ' ..');
      }
      if (counter > secondNumProgression) {
        return acc;
      }
      return iter(counter + step, acc += ` ${counter}`);
    };

    return iter(firstNum, '');
  };

  const question = progression(firstNumProgression);
  return cons(question, correctAnswer);
};

export default() => gameFrame(instruction, getData);
