import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${name}!`);

  const numCorrectAnswer = 3;
  let i = 0;

  const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

  while (i < numCorrectAnswer) {
    const numRandom = Math.floor(Math.random() * 100);
    console.log(`Question : ${numRandom}`);
    const answer = readlineSync.question('Your answer: ');
    const numEven = isEven(numRandom);
    if (answer !== numEven) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${numEven}.`);
      break;
    }
    i += 1;
  }
  return (i === numCorrectAnswer) ? console.log(`Congratulations,${name}`) : console.log(`Lets try again, ${name}!`);
};
