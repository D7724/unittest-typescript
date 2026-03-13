import { mean } from "./average";

test("test mean of four numbers", () => {
  // Arrange
  const numbers: number[] = [10, 1, 4, 8];
  const expected: number = 5.75;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("teast mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [10, 1, 4, 8, 2];
  const expected: number = 5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of no numbers", () => {
  // Arrange
  const numbers: number[] = [];
  const expected: Error = new Error("Cannot calculate mean of an empty array");

  // Act
  const actual = () => mean(numbers);

  // Assert
  expect(actual).toThrow(expected);
});

