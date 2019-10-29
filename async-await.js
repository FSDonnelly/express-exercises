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
