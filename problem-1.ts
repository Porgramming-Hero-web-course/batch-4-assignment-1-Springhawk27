const sumArray = (arr: number[]): number => {
  let sumOfEl = 0;
  for (let num of arr) {
    sumOfEl += num;
  }
  return sumOfEl;
};
console.log(sumArray([1, 2, 3, 4, 5]));
