def transformString(inputString):
    # Check if string length is odd
    if len(inputString) % 2 != 0:
        midIndex = len(inputString) // 2
        transformedString = ''
        # Transform first half to lowercase and second half to uppercase
        for i, char in enumerate(inputString):
            if i < midIndex:
                transformedString += char.lower()
            else:
                transformedString += char.upper()
        return transformedString
    else:
        return inputString

# Test cases
testStrings = ["oriJenBeliret", "orionmeo"]

for string in testStrings:
    transformedString = transformString(string)
    print(f"{string} -- {transformedString}")
