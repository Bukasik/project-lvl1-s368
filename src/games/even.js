import gameFrame from '..';
import randomNum from '../randFunc';
import { cons } from 'hexlet-pairs';

const isEven = num => (num % 2 === 0);

const instruction = 'Answer "yes" if number even otherwise answer "no".';
const getData = () => {
  const question = randomNum(0, 50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default() => gameFrame(instruction, getData);
