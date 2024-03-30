import re

def modifiedString(inputString):
    # Remove numbers
    inputString = re.sub(r'\d+', '', inputString)
    
    # Replace special characters with space
    inputString = re.sub(r'[^\w\s]', ' ', inputString)
    
    return inputString

# Example usage:
inputString = "hi, hello, welcome 2020-24 batch"
outputString = modifiedString(inputString)
print("Original String:", inputString)
print("Modified String:", outputString)
