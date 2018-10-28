import gameFrame from '..';
import randomNum from '../utils';
import { cons } from 'hexlet-pairs';

const instruction = 'Find the greatest common divisor of given numbers.';

const gcd = (first, second) => {
  let a = first;
  let b = second;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const getData = () => {
  const firstNum = randomNum(1, 50);
  const secondNum = randomNum(1, 50);

  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(gcd(firstNum, secondNum));
  return cons(question, correctAnswer);
};

export default() => gameFrame(instruction, getData);
