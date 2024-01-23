function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
};

function checkPunctuation(value) {
  if (value === " " || value === "." || value === "?" || value === "!")
    return true;
}

function checkIndex(value) {
  if (value > 25) {
    return value - 26;
  }
  if (value < 0) {
    return value + 26;
  }
  return value;
}

function caesarCipher(string, shiftFactor) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const defaultArray = string.toLowerCase().split("");
  const shiftedArray = defaultArray.map((value) => {
    if (checkPunctuation(value)) return value;
    const standardIndex = alphabet.findIndex((letter) => letter === value);
    const newIndex = checkIndex(standardIndex + shiftFactor);
    console.log(newIndex);
    return alphabet[newIndex];
  });
  const shiftedString = shiftedArray.join("").toUpperCase();
  return shiftedString;
}

function analyzeArray(array) {
  const { length } = array;
  const average = array.reduce((sum, current) => sum + current, 0) / length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  return { average, min, max, length };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
