/*
The decodeString function decodes a string s that contains encoded patterns in the form of k[substr], where k is a number indicating how many times the substring substr should be repeated. The function uses a stack to handle nested patterns and ensures the string is decoded correctly.

Explanation:
Stack for Parsing: The stack is used to store characters, substrings, and numbers temporarily until they can be fully decoded.
Processing the String:
If the current character is not a closing bracket (]), it is pushed onto the stack.
When a closing bracket is encountered, the function:
Extracts the substring substr by popping elements from the stack until the opening bracket ([) is found.
Pops the opening bracket from the stack.
Extracts the number k (the repetition count) by popping digits from the stack.
Repeats substr k times and pushes the result back onto the stack.
Final Result: After processing the entire string, the stack contains the fully decoded string, which is joined and returned.
Walkthrough:
Example:
s = "3[a2[c]]"

Start with an empty stack: stack = [].
Process characters:
Push 3 → stack = ['3'].
Push [ → stack = ['3', '['].
Push a → stack = ['3', '[', 'a'].
Push 2 → stack = ['3', '[', 'a', '2'].
Push [ → stack = ['3', '[', 'a', '2', '['].
Push c → stack = ['3', '[', 'a', '2', '[', 'c'].
Encounter ]:
Extract substr = 'c'.
Pop [ and 2, then repeat c twice → cc.
Push cc → stack = ['3', '[', 'a', 'cc'].
Encounter ]:
Extract substr = 'acc'.
Pop [ and 3, then repeat acc three times → accaccacc.
Push accaccacc → stack = ['accaccacc'].
Final stack: ['accaccacc'].
Result: "accaccacc".
Example:
s = "2[abc]3[cd]ef"

Decode 2[abc] → abcabc.
Decode 3[cd] → cdcdcd.
Combine with ef → "abcabccdcdcdef".
*/


/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = []; // Stack to store characters, numbers, and substrings

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ']') {
            // Decode the substring inside the brackets
            let substr = '';
            while (stack[stack.length - 1] !== '[') {
                substr = stack.pop() + substr; // Build the substring
            }
            stack.pop(); // Remove the '[' from the stack

            // Get the repetition count (k)
            let k = '';
            while (stack.length && !isNaN(stack[stack.length - 1])) {
                k = stack.pop() + k; // Build the number
            }

            // Repeat the substring and push back to the stack
            stack.push(...substr.repeat(Number(k)));
        } else {
            // Push the current character onto the stack
            stack.push(s[i]);
        }
    }

    // Join the stack to form the final decoded string
    return stack.join('');
};
