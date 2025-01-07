/*The reverseList function reverses a singly linked list and returns the head of the reversed list. 
It achieves this using an iterative approach with two pointers, prev and curr, to adjust the next pointers of each node in the list.


prev is initialized to null to represent the new end of the reversed list.
curr starts at the head of the original list.
Reversing the Links:

Traverse the list while curr is not null:
Save the next node (nextTemp = curr.next) to avoid losing the rest of the list.
Reverse the next pointer of the current node (curr.next = prev) to point to the previous node.
Move prev to curr and curr to nextTemp to continue processing the next node.
Return New Head:

At the end of the loop, curr becomes null and prev points to the new head of the reversed list. Return prev.
Walkthrough:
Example 1:
head = [1, 2, 3, 4, 5]

Initialization: prev = null, curr = 1.
Iteration 1:
nextTemp = 2, curr.next = null (reversing the link).
Move pointers: prev = 1, curr = 2.
Iteration 2:
nextTemp = 3, curr.next = 1.
Move pointers: prev = 2, curr = 3.
Iteration 3:
nextTemp = 4, curr.next = 2.
Move pointers: prev = 3, curr = 4.
Iteration 4:
nextTemp = 5, curr.next = 3.
Move pointers: prev = 4, curr = 5.
Iteration 5:
nextTemp = null, curr.next = 4.
Move pointers: prev = 5, curr = null.
Result: prev = [5, 4, 3, 2, 1].
Example 2:
head = [1, 2]

Reverse the link: 2 → 1.
Result: [2, 1].
Example 3:
head = []

No nodes to reverse.
Result: [].
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.next = (next===undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null; // Initialize previous pointer as null
    let curr = head; // Current pointer starts at the head of the list

    // Traverse the list
    while (curr !== null) {
        let nextTemp = curr.next; // Save the next node
        curr.next = prev; // Reverse the link
        prev = curr; // Move prev to the current node
        curr = nextTemp; // Move curr to the next node
    }

    return prev; // Return the new head of the reversed list
};
