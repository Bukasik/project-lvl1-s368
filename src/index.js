import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('May I have you name? ');
  /* eslint-disable no-console */
  console.log(`Hello, ${name}!`);
  /* eslint-disable no-console */
};
