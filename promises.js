getRandomNumber = (min, max) => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let random = Math.floor(Math.random() * (max - min + 1) + min);
      resolve(random);
    }, 2000);
  });
  return promise;
};

printNumber = num => {
  console.log(num);
};

getRandomNumber(1, 10).then(printNumber);

getOddRandomNumber = (min, max) => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let random = Math.floor(Math.random() * (max - min + 1) + min);
      if (random % 2 === 1) {
        resolve(random);
      } else {
        reject(`The number ${random} is even`);
      }
    }, 2000);
  });
  return promise;
};

getOddRandomNumber(1, 10)
  .then(printNumber)
  .catch(msg => {
    console.log(msg);
  });
