import { median } from "./median";

test("test median for even number of elements", () => {
    // Arrange
    const numbers: number[] = [10, 1, 4, 8];
    const expected: number = 6;
    // Act
    const actual: number = median(numbers);
    // Assert
    expect(actual).toBe(expected);
});

test("test median for odd number of elements", () => {
    // Arrange
    const numbers: number[] = [10, 1, 4, 8, 2];
    const expected: number = 4;
    // Act
    const actual: number = median(numbers);
    // Assert
    expect(actual).toBe(expected);
});

test("test median of no numbers", () => {
    // Arrange
    const numbers: number[] = [];
    const expected: Error = new Error("Cannot calculate median of an empty array");
    // Act
    const actual = () => median(numbers);
    // Assert
    expect(actual).toThrow(expected);
}); 