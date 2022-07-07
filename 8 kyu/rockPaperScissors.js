/* 
  Let's play! You have to return which player won! In case of a draw return Draw!. 

  "scissors", "paper" --> "Player 1 won!"
  "scissors", "rock" --> "Player 2 won!"
  "paper", "paper" --> "Draw!"
*/

const rps = (p1, p2) => {
  let message = '';

  switch (p1) {
    case 'rock':
      if (p2 === 'scissors') {
        message = 'Player 1 won!';
      } else if (p2 === 'paper') {
        message = 'Player 2 won!';
      } else {
        message = 'Draw!'
      }
      break;
    case 'paper':
      if (p2 === 'rock') {
        message = 'Player 1 won!';
      } else if (p2 === 'scissors') {
        message = 'Player 2 won!';
      } else {
        message = 'Draw!'
      }
      break;
    case 'scissors':
      if (p2 === 'paper') {
        message = 'Player 1 won!';
      } else if (p2 === 'rock') {
        message = 'Player 2 won!';
      } else {
        message = 'Draw!'
      }
      break;
  }
  return message;
};

// If player 1 wins
console.log(rps('rock', 'scissors'));
console.log(rps('scissors', 'paper'));
console.log(rps('paper', 'rock'));

// If player 2 wins
console.log(rps('scissors', 'rock'));
console.log(rps('paper', 'scissors'));
console.log(rps('rock', 'paper'));

// Draw
console.log(rps('rock', 'rock'));
console.log(rps('scissors', 'scissors'));
console.log(rps('paper', 'paper'));