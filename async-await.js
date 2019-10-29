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

func = async () => {
  let randomNumber = await getRandomNumber(1, 10);
  printNumber(randomNumber);
};
func();

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

func2 = async () => {
  try {
    let randomNumber = await getOddRandomNumber(1, 10);
    printNumber(randomNumber);
  } catch (msg) {
    console.log(msg);
  }
};
func2();
