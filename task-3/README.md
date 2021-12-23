# TASK 3

- Instruction
  - Given an array of integers, return a new array where each element in the new array is the number of smaller elements to the right of that element in the original input array.

  - For example, given the array [3, 4, 9, 6, 1],return [1, 1, 2, 1, 0], since:

    - There is 1 smaller element to the right of 3
    - There is 1 smaller element to the right of 4
    - There are 2 smaller elements to the right of 9
    - There is 1 smaller element to the right of 6
    - There are no smaller elements to the right of 1

- Approach
  - Create an empty array
  - Do a while loop through the input array from index 0
  - Get the current element
  - Slice the input array from the current index
  - Filter the slice array for numbers greater than current element
  - Push the length of the filter to the empty array created above
  - Increment the iteration
  - Return the array created above
