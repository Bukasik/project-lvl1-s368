import gameFrame from '..';
import randomNum from '../utils';
import { cons } from 'hexlet-pairs';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getData = () => {
  const question = randomNum(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default() => gameFrame(instruction, getData);
