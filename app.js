const getComputerChoice = () => {
  const choices = ['tijera', 'papel', 'tijera'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

const getWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It is a tie!';
  }
  if (userChoice === 'piedra') {
    if (computerChoice === 'papel') {
      return 'You lose!';
    } else {
      return 'You win!';
    }
  }
  if (userChoice === 'papel') {
    if (computerChoice === 'tijera') {
      return 'You lose!';
    } else {
      return 'You win!';
    }
  }
  if (userChoice === 'tijera') {
    if (computerChoice === 'piedra') {
      return 'You lose!';
    } else {
      return 'You win!';
    }   
  }
}

const userChoice = prompt('Elige: piedra, papel o tijera');
const computerChoice = getComputerChoice();

console.log(getWinner(userChoice, computerChoice));
