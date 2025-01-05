/**
The deleteMiddle function removes the middle node of a singly linked list and returns the modified list. The middle node is determined based on the length of the list, following 0-based indexing, where the middle node corresponds to the ⌊n / 2⌋th node.

Explanation:
Edge Case:

If the list is empty (head === null), return null.
If the list contains only one node, removing the middle node leaves the list empty.
Two-Pointer Approach:

The function uses two pointers, slow and fast, initialized such that:
slow moves one step at a time.
fast moves two steps at a time.
When fast reaches the end of the list, slow is at the node just before the middle node.
Removing the Middle Node:

The slow.next pointer is updated to skip the middle node (slow.next = slow.next.next), effectively removing it from the list.
Returning the Result:

A dummy node (prev) is used to simplify edge cases and allows returning the modified list starting from prev.next.
Walkthrough:
Example 1:
head = [1, 3, 4, 7, 1, 2, 6]

Initialize:
prev points to a dummy node → [0, 1, 3, 4, 7, 1, 2, 6].
slow starts at the dummy node, and fast starts at head.
Progress pointers:
slow → 1, fast → 4.
slow → 3, fast → 1.
slow → 4, fast → 6.
Remove the middle node (7): slow.next = slow.next.next.
Result: [1, 3, 4, 1, 2, 6].
Example 2:
head = [1, 2, 3, 4]

Progress pointers:
slow → 1, fast → 3.
slow → 2, fast → null.
Remove the middle node (3): slow.next = slow.next.next.
Result: [1, 2, 4].
Example 3:
head = [2, 1]

Progress pointers:
slow → 0, fast → 1.
Remove the middle node (1): slow.next = slow.next.next.
Result: [2].

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
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if (head === null || head.next === null) return null; // Edge case: empty list or single node

    // Dummy node to simplify handling of edge cases
    let prev = new ListNode(0);
    prev.next = head;

    // Initialize two pointers
    let slow = prev;
    let fast = head;

    // Move slow and fast pointers
    while (fast !== null && fast.next !== null) {
        slow = slow.next; // Slow moves one step
        fast = fast.next.next; // Fast moves two steps
    }

    // Remove the middle node
    slow.next = slow.next.next;

    // Return the modified list starting from head
    return prev.next;
};
