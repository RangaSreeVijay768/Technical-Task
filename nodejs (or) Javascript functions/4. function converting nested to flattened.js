function flattenObject(obj) {
    const stack = [...Object.entries(obj)];
    const result = {};

    while (stack.length) {
        const [key, value] = stack.pop();

        if (typeof value === 'object' && value !== null) {
            for (const [subKey, subValue] of Object.entries(value)) {
                stack.push([`${key}.${subKey}`, subValue]);
            }
        } else {
            result[key] = value;
        }
    }

    return result;
}

// Example usage:
const nestedObject = {
    academics: {
        qualification: "Btech",
        zone: "East"
    },
    address: {
        state: "KA",
        pincode: "121211"
    }
};

const flattenedObject = flattenObject(nestedObject);
console.log(flattenedObject);
