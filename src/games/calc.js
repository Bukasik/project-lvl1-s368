import gameFrame from '..';
import randomNum from '../utils';
import { cons } from 'hexlet-pairs';

const instruction = 'What is the result of the expression?';

const getData = () => {
  const firstNum = randomNum(0, 50);
  const secondNum = randomNum(0, 50);
  const operatorNum = randomNum(1, 3);

  let result;
  let operator;

  switch (operatorNum) {
    case 1:
      operator = '+';
      result = firstNum + secondNum;
      break;
    case 2:
      operator = '-';
      result = firstNum - secondNum;
      break;
    case 3:
      operator = '*';
      result = firstNum * secondNum;
      break;
    default:
      break;
  }
  const question = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = String(result);
  return cons(question, correctAnswer);
};

export default() => gameFrame(instruction, getData);
