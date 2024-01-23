import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index";

test("hello is Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("String with multiple words is reversed", () => {
  expect(reverseString("String is reversed")).toBe("desrever si gnirtS");
});

test("add 2 and 2", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("subtract 4 and 2", () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test("mulitply 9 and 3", () => {
  expect(calculator.multiply(9, 3)).toBe(27);
});

test("divide 9 and 3", () => {
  expect(calculator.divide(9, 3)).toBe(3);
});

test("shift 2 letters", () => {
  expect(caesarCipher("hello", 2)).toBe("JGNNQ");
});

test("shift after z", () => {
  expect(caesarCipher("Zebra", 3)).toBe("CHEUD");
});

test("shift backwards from a", () => {
  expect(caesarCipher("aPple", -4)).toBe("WLLHA");
});

test("shift multiple words", () => {
  expect(caesarCipher("hello goodbye", 6)).toBe("NKRRU MUUJHEK");
});

test("shift multiple words with punctuation", () => {
  expect(caesarCipher("Hello! How are you? Goodbye.", 5)).toBe(
    "MJQQT! MTB FWJ DTZ? LTTIGDJ.",
  );
});

test("keeping the same pace", () => {
  expect(caesarCipher("I stay the same", 0)).toBe("I STAY THE SAME");
});

test("return correct object", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
