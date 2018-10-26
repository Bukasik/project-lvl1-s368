import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numCorrectAnswer = 3;
export default (instruction, getData) => {
  console.log('Welcome t o the Brain Games!');
  console.log(instruction);
  const name = readlineSync.question('May I have you name? ');
  for (let i = 0; i < numCorrectAnswer; i += 1) {
    const questionAndData = getData();
    console.log(`Question : ${car(questionAndData)}`);

    const answer = readlineSync.question('Your answer: ');
    if (answer !== cdr(questionAndData)) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${cdr(questionAndData)}.`);
      console.log(`Lets try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations,${name}`);
};
