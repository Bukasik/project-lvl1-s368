import readlineSync from 'readline-sync';

const isEven = num => (num % 2 === 0);

const numCorrectAnswer = 3;
export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May I have you name? ');
  let i = 0;

  for (i; i < numCorrectAnswer; i += 1) {
    const question = Math.floor(Math.random() * 100);
    console.log(`Question : ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Lets try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations,${name}`);
};
