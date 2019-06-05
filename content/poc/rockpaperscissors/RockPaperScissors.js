getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (document.getElementById('rock').onclick = function  {
    userInput = 'rock';
    return userInput;
  } else if (document.getElementById('paper')) {
    userInput = 'paper';
    return userInput;
  } else if (document.getElementById('scissors')) {
    userInput = 'scissors';
    return userInput;
  } else {
    console.log('Error!');
  }
};

getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It is a tie';
  } else {
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'You lose';
      } else {
        return 'You win';
      }
    }

    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'You lose';
      } else {
        return 'You win';
      }
    }

    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'You lose';
      } else {
        return 'You win';
      }
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();

  let yourChoice = ('You chose: ' + userChoice + '.');
  let opponentChoice = ('The computer chose: ' + computerChoice + '.');
  yourChoice.innerHTML(yourChoice);
  opponentChoice.innerHTML(opponentChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

document.getElementById('button').onclick = function () {
  playGame();
};
