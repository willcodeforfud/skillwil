// function finder(array) {
//   let Yperson = array[0];

//   for (let i = 1; i < array.length; i++) {
//     if (array[i].age < Yperson.age) {
//       Yperson = array[i];
//     }
//   }

//   return Yperson.name;
// }
// const users = [
//   { name: 'Temo', age: 25 },
//   { name: 'Lasha', age: 21 },
//   { name: 'Ana', age: 28 }
// ];

// const Yname = finder(users);
// console.log(Yname);


// function updateUser(user) {
//   const updatedUser = {
//     ...user,
//     name: 'nika',
//     age: 20,
//     status: 'student',
//   };

//   return updatedUser;
// }

// const user = {
//   name: 'giga',
//   age: 25,
//   status: 'mentor'
// };

// const updatedUser = updateUser(user);
// console.log(updatedUser);

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
  let attemptsA = 0;
  let attemptsB = 0;
  let rollA = 0;
  let rollB = 0;

  while (rollA !== 3 && rollB !== 3) {
    rollA = rollDice();
    rollB = rollDice();

    attemptsA++;
    attemptsB++;

    console.log(`Player A rolled: ${rollA}`);
    console.log(`Player B rolled: ${rollB}`);
  }

  console.log("Game Over!");
  console.log(`Player A made ${attemptsA} attempts`);
  console.log(`Player B made ${attemptsB} attempts`);

  if (rollA === 3 && rollB !== 3) {
    console.log("Player A wins!");
  } else if (rollB === 3 && rollA !== 3) {
    console.log("Player B wins!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();