function sumArray(array) {
  if (!Array.isArray(array)) {
    return NaN;
  }

  let result = 0;

  for (let i = 0; i < array.length; i++) {
    result += Number(array[i]);
  }

  return result;
}

function hello(text = "World") {
  return `Hello ${text}!`;
}

module.exports = {
  sumArray,
  hello,
};
