function addNumberFactory(num) {
  function addNumber(value) {
    // addNumberFactoryの引数numはaddNumberのレキシカルスコープとなる
    return num + value;
  }

  return addNumber;
}

const add5 = addNumberFactory(5);
const add10 = addNumberFactory(10);

const result = add5(10);
const result2 = add10(10);


console.log(result);
console.log(result2);
