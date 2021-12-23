# TASK 2

- Instruction
  - Given a string, return the first recurring character in it, or null if there is no recurring character. For example, given the string "acbbac", return "b". Given the string "abcdef", return null.

- Approach
  - Loop through the string starting from index 1
  - Do check the present element with the previous
  - If the check is true, return the present element
  - If it is not true until the end of the loop, return null
