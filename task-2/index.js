function findRecurrence(str) {
  for (let index = 1; index < str.length; index++) {
    if (str[index] === str[index - 1]) {
      return str[index];
    }
  }
  return null;
}

module.exports = findRecurrence;