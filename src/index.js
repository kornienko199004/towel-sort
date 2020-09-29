
// You should implement your task here.
const sorter = (a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  }
  return 0;
};

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  const fn = (acc, arr, deepCount) => {
    if (arr.length === 0) {
      return acc;
    }

    const [item, ...rest] = arr;

    if (Array.isArray(item)) {
      const newAcc = deepCount % 2 === 0 ? [...acc, ...fn([], item, 1).sort(sorter)] : [...acc, ...fn([], item, 1)];
      return fn(newAcc, rest, deepCount + 1);
    }
    return fn([...acc, item], rest, deepCount + 1);
  };

  return fn([], matrix, 1);
}
