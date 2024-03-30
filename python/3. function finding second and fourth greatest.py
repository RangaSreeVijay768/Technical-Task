def findGreatest(numbers):
    # Check if the length of the list is less than 4
    if len(numbers) < 4:
        raise ValueError("List length is less than 4. Cannot find second and fourth greatest numbers.")
    
    # Sort the list in descending order and directly extract the second and fourth elements
    secondGreatest, fourthGreatest = sorted(numbers, reverse=True)[1], sorted(numbers, reverse=True)[3]
    
    return secondGreatest, fourthGreatest

# Example usage:
numbers = [10, 5, 20, 15, 30, 25]
try:
    second, fourth = findGreatest(numbers)
    print("Second greatest number:", second)
    print("Fourth greatest number:", fourth)
except ValueError as e:
    print(e)
