function lesserCount(arr) {
  const result = [];
  let index = 0;
  while (index < arr.length) {

    const currentValue = arr[index];
    const rest = arr.slice(index + 1);
    const lessElements = rest.filter(item => currentValue > item);
    result.push(lessElements.length);
    index++;
  }
  return result;
}
