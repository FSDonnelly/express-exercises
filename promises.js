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
