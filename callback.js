getRandomNumber = (min, max, next) => {
  setTimeout(() => {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    // return random;
    next(random);
  }, 2000);
};

printNumber = num => {
  console.log(num);
};

// let randomNumber = getRandomNumber(1, 10);
// printNumber(randomNumber);
getRandomNumber(1, 10, printNumber);
