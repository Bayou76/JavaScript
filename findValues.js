function findValues(hash,array) {
  for (let i = 0; i < array.length; i++) {
      array[i] = hash[array[i]];
  }
  return array;
}

module.exports = findValues;