getRandomNumber = (min, max) => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};

printNumber = num => {
  console.log(num);
};

let randomNumber = getRandomNumber(1, 10);
printNumber(randomNumber);
