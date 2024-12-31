/*
The removeStars function removes characters in a string s based on the "star operation." A star (*) removes the closest non-star character to its left along with itself. The function processes the string from left to right, using a stack-like approach to track characters.

Explanation:
Stack Representation: The arr array acts as a stack. For every character in s:
If the character is not a star (*), it gets pushed onto the stack.
If the character is a star (*), it removes (pops) the most recent character from the stack.
Result Formation: After processing the entire string, the remaining characters in the stack are joined to form the final string, which excludes all removed characters.
Walkthrough:
Example 1:
s = "leet**cod*e"

Start with an empty stack: arr = [].
Process characters:
l: Add to stack → arr = ['l'].
e: Add to stack → arr = ['l', 'e'].
e: Add to stack → arr = ['l', 'e', 'e'].
t: Add to stack → arr = ['l', 'e', 'e', 't'].
*: Remove top element → arr = ['l', 'e', 'e'].
*: Remove top element → arr = ['l', 'e'].
c: Add to stack → arr = ['l', 'e', 'c'].
o: Add to stack → arr = ['l', 'e', 'c', 'o'].
d: Add to stack → arr = ['l', 'e', 'c', 'o', 'd'].
*: Remove top element → arr = ['l', 'e', 'c', 'o'].
e: Add to stack → arr = ['l', 'e', 'c', 'o', 'e'].
Final stack: ['l', 'e', 'c', 'o', 'e'].
Result: "lecoe".

 
 */
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let arr = []; // Stack to store characters

    // Process each character in the string
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "*") {
            arr.push(s[i]); // Add character to stack if it's not '*'
        } else {
            arr.pop(); // Remove the top character if '*' is encountered
        }
    }

    // Combine remaining characters in the stack to form the result
    return arr.join('');
};
