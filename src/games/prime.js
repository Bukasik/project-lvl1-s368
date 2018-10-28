import gameFrame from '..';
import randomNum from '../utils';
import { cons } from 'hexlet-pairs';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const getData = () => {
  const question = randomNum(1, 50);
  let correctAnswer = 'yes';
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      correctAnswer = 'no';
    }
  }
  return cons(question, correctAnswer);
};

export default() => gameFrame(instruction, getData);
