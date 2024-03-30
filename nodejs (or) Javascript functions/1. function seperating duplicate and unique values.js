function splitArray(arr) {
    const unique = [];
    const duplicate = [];
    const items = [];

    for (let i = 0; i < arr.length; i++) {
        const currentItem = arr[i];
        
        if (items[currentItem]) {
            duplicate.push(currentItem);
        } else {
            unique.push(currentItem);
            items[currentItem] = true;
        }
    }

    return { unique, duplicate };
}

// Example:
const input = ["my", "name", "is", "my", "location", "is"];
const result = splitArray(input);
console.log("Unique:", result.unique);
console.log("Duplicate:", result.duplicate);
