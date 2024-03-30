function convertStringToObject(inputArray) {
    const outputArray = [];
    
    inputArray.forEach(input => {
        const [uniqueId, empNumber, phoneNumber] = input.split(' ');
        outputArray.push({
            uniqueId,
            empNumber,
            phoneNumber
        });
    });
    
    return outputArray;
}

// Example:
const inputArray = [
    "DB20400045620 1323474 9887554555",
    "DB20450398520 3243434 6877887887",
    "DB20406598420 2332323 5878764564",
    "DB20650398320 4656566 5645645666"
];

const outputArray = convertStringToObject(inputArray);
console.log(outputArray);
