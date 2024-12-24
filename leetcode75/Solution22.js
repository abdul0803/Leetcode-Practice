/**
 The closeStrings function determines if two strings, word1 and word2, can be transformed into each other using two types of operations: 
 swapping any two characters or transforming one character into another (and vice versa) for all occurrences of those characters.
 The function returns true if such a transformation is possible, and false otherwise.

1. Frequency Array Setup: Two arrays freq1 and freq2 are initialized to store the frequency of each letter (from 'a' to 'z') for word1 and word2. 
This is done by iterating through each string and updating the respective frequency array.

2. Character Set Check: After building the frequency arrays, the function checks whether both strings use the same set of characters. 
If a character appears in one string but not the other, it immediately returns false.

3. Frequency Match Check: The frequency arrays are sorted, and the function compares them. If the sorted frequencies don’t match, 
the transformation is not possible, and the function returns false.

4. Return true: If both the character sets and sorted frequencies match, the function returns true.

Walkthrough:
Example 1:
word1 = "abc", word2 = "bca"

Frequencies: freq1 = [1,1,1,...] for "abc", freq2 = [1,1,1,...] for "bca".
Character sets match. Sorted frequencies: [1,1,1,...] for both.
Result: true.
Example 2:
word1 = "a", word2 = "aa"

Frequencies: freq1 = [1,...], freq2 = [2,...].
Character sets don’t match (only one 'a' in word1 vs two in word2).
Result: false.
Example 3:
word1 = "cabbba", word2 = "abbccc"

Frequencies: freq1 = [1,2,3,...] for "cabbba", freq2 = [1,2,3,...] for "abbccc".
Character sets match. Sorted frequencies: [1,2,3,...] for both.
Result: true.


Walkthrough:
Example 1:
word1 = "abc", word2 = "bca"

Frequencies: freq1 = [1,1,1,...] for "abc", freq2 = [1,1,1,...] for "bca".
Character sets match. Sorted frequencies: [1,1,1,...] for both.
Result: true.
Example 2:
word1 = "a", word2 = "aa"

Frequencies: freq1 = [1,...], freq2 = [2,...].
Character sets don’t match (only one 'a' in word1 vs two in word2).
Result: false.
Example 3:
word1 = "cabbba", word2 = "abbccc"

Frequencies: freq1 = [1,2,3,...] for "cabbba", freq2 = [1,2,3,...] for "abbccc".
Character sets match. Sorted frequencies: [1,2,3,...] for both.
Result: true.

 */

var closeStrings = function(word1, word2) {
    const freq1 = new Array(26).fill(0); // Frequency array for word1
    const freq2 = new Array(26).fill(0); // Frequency array for word2

    // Populate frequency arrays for word1 and word2
    for (let i = 0; i < word1.length; ++i) {
        freq1[word1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    for (let i = 0; i < word2.length; ++i) {
        freq2[word2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    // Check if both words use the same set of characters
    for (let i = 0; i < 26; ++i) {
        if ((freq1[i] > 0 && freq2[i] === 0) || (freq2[i] > 0 && freq1[i] === 0)) {
            return false; // Mismatch in character sets
        }
    }

    // Sort frequencies and compare
    freq1.sort((a, b) => a - b);
    freq2.sort((a, b) => a - b);
    for (let i = 0; i < 26; ++i) {
        if (freq1[i] !== freq2[i]) {
            return false; // Mismatch in sorted frequencies
        }
    }

    return true; // Strings are close
};
