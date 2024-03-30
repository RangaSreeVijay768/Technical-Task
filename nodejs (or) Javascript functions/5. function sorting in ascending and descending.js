function sortArray(arr, order) {
    if (order === 'ascending') {
        return arr.slice().sort((a, b) => a - b);
    }
    if (order === 'descending') {
        return arr.slice().sort((a, b) => b - a);
    }
}

// Example usage:
const numbers = [5, 3, 8, 1, 2];
console.log("Ascending order:", sortArray(numbers, 'ascending'));
console.log("Descending order:", sortArray(numbers, 'descending'));
