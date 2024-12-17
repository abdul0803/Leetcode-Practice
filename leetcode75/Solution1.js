/*
Understanding the code:
The mergeAlternately function combines two strings, word1 and word2, by adding their letters in alternating order. 
It initializes an empty string result to store the combined letters. A loop runs up to the length of the longer string using Math.max.
Inside the loop, the function checks if the current index i is within the bounds of word1 and word2. 
If so, it adds the letter from each string to result. 
If one string is longer, its remaining letters are added automatically to the end as the loop continues. 
Finally, the function returns the merged string.

Walkthrough:
Start with Input: Assume word1 = "abc" and word2 = "pqr".
Initialize Result: Start with result = "".
Loop: The loop runs 3 times since both strings have a length of 3:
Iteration 0: Add word1[0] ("a") and word2[0] ("p"). result = "ap".
Iteration 1: Add word1[1] ("b") and word2[1] ("q"). result = "apbq".
Iteration 2: Add word1[2] ("c") and word2[2] ("r"). result = "apbqcr".
End Result: The loop ends, and the function returns "apbqcr".



For an uneven case like word1 = "ab" and word2 = "pqrs", 
the loop will handle the first two characters
in alternating order and then append the extra "rs" from word2.
 */

var mergeAlternately = function(word1, word2) {
    let result = '';
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) result += word1[i];
    if (i < word2.length) result += word2[i];
  }
  return result;
};
