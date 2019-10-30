// let shop = require(`./shop`);

// shop.calCost(5, 3);
// console.log(shop.myGoods[0]);
// let math = require(`./math`);

// console.log(math.PI);

// math.sum([math.PI, 10, 8]);
// math.findMax([math.PI, 10, 8]);
// math.findMin([math.PI, 10, 8]);

let PI = 3.14;

sum = elements => {
  let total = 0;
  for (let i = 0; i < elements.length; i++) {
    total += elements[i];
  }
  console.log(`Sum: ${total}`);
};

findMax = elements => {
  let el = elements[0];
  for (let i = 1; i < elements.length; i++) {
    if (elements[i] > el) {
      el = elements[i];
    }
  }
  console.log(`Max: ${el}`);
};

findMin = elements => {
  let el = elements[0];
  for (let i = 1; i < elements.length; i++) {
    if (elements[i] < el) {
      el = elements[i];
    }
  }
  console.log(`Min: ${el}`);
};

module.exports.PI = PI;
module.exports.sum = sum;
module.exports.findMax = findMax;
module.exports.findMin = findMin;
