// getRandomNumber = (min, max) => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let random = Math.floor(Math.random() * (max - min + 1) + min);
//       resolve(random);
//     }, 2000);
//   });
//   return promise;
// };

// printNumber = num => {
//   console.log(num);
// };

// getRandomNumber(1, 10).then(printNumber);

// getOddRandomNumber = (min, max) => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let random = Math.floor(Math.random() * (max - min + 1) + min);
//       if (random % 2 === 1) {
//         resolve(random);
//       } else {
//         reject(`The number ${random} is even`);
//       }
//     }, 2000);
//   });
//   return promise;
// };

// getOddRandomNumber(1, 10)
//   .then(printNumber)
//   .catch(msg => {
//     console.log(msg);
//   });

//---- TASK ----//
generateNumber = (quantity, min, max) => {
  // let promise =
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (quantity <= 0) {
        reject(`Quantity <= 0`);
      }
      if (min >= max) {
        reject(`Min >= Max`);
      }
      let numbers = [];
      for (let i = 0; i < quantity; i++) {
        let random = Math.floor(Math.random() * (max - min + 1) + min);
        numbers.push(random);
      }
      resolve(numbers);
    }, 2000);
  });
  // return promise;
};

sum = numbers => {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  console.log(`Numbers: ${numbers}`);
  console.log(`Sum: ${total}`);
};

generateNumber(3, 41, 10)
  .then(sum)
  .catch(msg => {
    console.log(msg);
  });
