let goods = [`apple`, `orange`, `avacado`];

function calCost(price, number) {
  let cost = price * number;
  console.log(`Cost: $${cost}`);
}

module.exports.calCost = calCost;
module.exports.myGoods = goods;
// console.log(module);
