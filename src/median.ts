export function median(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Cannot calculate median of an empty array");
    }
    const sortedNumbers: number[] = numbers.slice().sort((a, b) => a - b);
    const mid: number = Math.floor(sortedNumbers.length / 2);
    if (sortedNumbers.length % 2 === 0) {
        return (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2;
    } else {
        return sortedNumbers[mid];
    }
}