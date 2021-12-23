function sortSquares(arr) {
  const squareArr = arr.map(number => number * number);
  const sortArr = squareArr.sort((a, b) => a - b);
  return sortArr;
}

module.exports = sortSquares;