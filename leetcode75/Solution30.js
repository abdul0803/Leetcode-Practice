/*The oddEvenList function rearranges a singly linked list such that all nodes at odd indices are grouped together followed by all nodes at even indices, preserving their relative order.

Explanation:
Special Case:

If the input list is empty (head == null), return null.
Initialization:

Use two pointers, odd and even, to traverse the odd and even nodes respectively.
Use an additional pointer, evenHead, to store the starting node of the even group.
Reordering:

Traverse the list using the odd and even pointers:
Link the current odd node to the next odd node (even.next).
Move the odd pointer to the next odd node (odd = odd.next).
Link the current even node to the next even node (odd.next).
Move the even pointer to the next even node (even = even.next).
Stop when there are no more even or odd nodes left (even == null || even.next == null).
Connect Odd and Even Lists:

After traversal, link the end of the odd list (odd.next) to the head of the even list (evenHead).
Return the Modified List:

The reordered list starts at head.
Walkthrough:
Example 1:
head = [1,2,3,4,5]

Initialize:
odd = 1, even = 2, evenHead = 2.
Iteration 1:
odd.next = 3, odd = 3.
even.next = 4, even = 4.
Iteration 2:
odd.next = 5, odd = 5.
even.next = null, even = null.
Link odd and even: odd.next = 2.
Result: [1, 3, 5, 2, 4].
Example 2:
head = [2,1,3,5,6,4,7]

Initialize:
odd = 2, even = 1, evenHead = 1.
Iteration 1:
odd.next = 3, odd = 3.
even.next = 5, even = 5.
Iteration 2:
odd.next = 6, odd = 6.
even.next = 4, even = 4.
Iteration 3:
odd.next = 7, odd = 7.
even.next = null, even = null.
Link odd and even: odd.next = 1.
Result: [2, 3, 6, 7, 1, 5, 4].
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
var oddEvenList = function(head) {
    if (head != null) {
        // Initialize pointers
        let odd = head; // Pointer for odd-indexed nodes
        let even = head.next; // Pointer for even-indexed nodes
        let evenHead = even; // Store the head of the even list

        // Reorder nodes into odd and even groups
        while (even && even.next != null) {
            odd.next = even.next; // Link odd node to the next odd node
            odd = odd.next; // Move the odd pointer
            even.next = odd.next; // Link even node to the next even node
            even = even.next; // Move the even pointer
        }

        // Connect the odd list to the even list
        odd.next = evenHead;
    }

    return head; // Return the modified list
};
