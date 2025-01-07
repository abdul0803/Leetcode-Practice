/*
The pairSum function calculates the maximum twin sum of a linked list,
where the twin sum is defined as the sum of a node and its twin (its counterpart from the opposite end of the list).
The twin of a node at index i is the node at index n - 1 - i.

Explanation:
Find the Middle of the List:

Use two pointers (slow and fast) to locate the middle of the list.
fast moves twice as fast as slow. When fast reaches the end, slow will be at the middle.
Reverse the Second Half:

Starting from the middle, reverse the second half of the linked list to simplify pairing nodes from opposite ends.
Calculate Twin Sums:

Traverse both the original first half (head) and the reversed second half (prev) simultaneously to compute the twin sums.
Keep track of the maximum twin sum encountered.
Return the Result:

Return the maximum twin sum.
Walkthrough:
Example 1:
head = [5, 4, 2, 1]

Find the Middle:

slow stops at 2 (middle of the list).
Reverse the Second Half:

Original list: 5 → 4 → 2 → 1
Reversed second half: 1 → 2
Calculate Twin Sums:

Pair 5 with 1 → Twin sum = 6.
Pair 4 with 2 → Twin sum = 6.
Maximum twin sum = 6.
Return: 6.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    // Step 1: Find the middle of the list
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        fast = fast.next.next; // Fast pointer moves two steps
        slow = slow.next; // Slow pointer moves one step
    }

    // Step 2: Reverse the second half of the list
    let prev = null;
    while (slow) {
        let nextNode = slow.next; // Save next node
        slow.next = prev; // Reverse the current node
        prev = slow; // Move prev pointer forward
        slow = nextNode; // Move slow pointer forward
    }

    // Step 3: Calculate the maximum twin sum
    let maxVal = 0;
    while (prev) {
        maxVal = Math.max(maxVal, prev.val + head.val); // Calculate twin sum
        head = head.next; // Move in the first half
        prev = prev.next; // Move in the reversed second half
    }

    return maxVal; // Return the maximum twin sum
};

