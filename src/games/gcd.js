import gameFrame from '..';
import randomNum from '../randFunc';
import { cons } from 'hexlet-pairs';

const instruction = 'Find the greatest common divisor of given numbers.';

const getData = () => {
  let firstNum = randomNum(0, 50);
  let secondNum = randomNum(0, 50);

  const question = `${firstNum} ${secondNum}`;

  while (firstNum !== 0 && secondNum !== 0) {
    if (firstNum > secondNum) {
      firstNum %= secondNum;
    } else {
      secondNum %= firstNum;
    }
  }

  const result = firstNum + secondNum;

  const correctAnswer = String(result);
  return cons(question, correctAnswer);
};

export default() => gameFrame(instruction, getData);
