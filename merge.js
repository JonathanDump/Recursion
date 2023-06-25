function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const left = arr.slice(0, Math.floor(arr.length / 2));
  const right = arr.slice(Math.floor(arr.length / 2), arr.length);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

const merge = (arr1, arr2) => {
  const res = [];
  let i = 0;

  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i++]);
    } else {
      res.push(arr2[j++]);
    }
  }

  for (; i < arr1.length; i++) {
    res.push(arr1[i]);
  }

  for (; j < arr2.length; j++) {
    res.push(arr2[j]);
  }

  return res;
};
console.log(mergeSort([3, 5, 2, 1, 4, 6])); //[1, 2, 3, 4, 5, 6]
