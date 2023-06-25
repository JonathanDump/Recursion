function fibsFor(num) {
  if (num === 0) {
    return [0];
  }
  const res = [0, 1];
  let fib2 = 0;
  let fib1 = 1;
  let fib = 1;

  for (let i = 2; i < num; i++) {
    res.push(fib);
    fib2 = fib1;
    fib1 = fib;
    fib = fib1 + fib2;
  }
  return res;
}
console.log(fibsFor(8)); //[0, 1, 1, 2, 3, 5, 8, 13]

function fibsRec(num) {
  if (num <= 1) {
    return [num, 0];
  }

  function fibsRecS(n) {
    return n <= 1 ? n : fibsRecS(n - 1) + fibsRecS(n - 2);
  }

  let res = [];

  for (let i = 0; i < num; i++) {
    res.push(fibsRecS(i));
  }
  return res;
}
console.log(fibsRec(8)); //[0, 1, 1, 2, 3, 5, 8, 13];

const fib = (n) =>
  new Array(n).fill(1).reduce((arr, _, i) => {
    arr.push(i <= 1 ? i : arr[i - 2] + arr[i - 1]);
    return arr;
  }, []);

console.log(fib(8)); //[0, 1, 1, 2, 3, 5, 8, 13];

const fib1 = (length) =>
  Array.from(
    { length },
    (
      (a, b) => (_) =>
        ([b, a] = [a + b, b, a])[2]
    )(0, 1)
  );

console.log(fib1(8)); //[0, 1, 1, 2, 3, 5, 8, 13];
