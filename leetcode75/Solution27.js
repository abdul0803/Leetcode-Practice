/*
The RecentCounter class is designed to count the number of recent requests within a 3000-millisecond time window. It uses a queue (q) to store timestamps of requests and ensures that only the timestamps within the range [t - 3000, t] are kept in the queue.

Explanation:
Initialization:

The constructor initializes the RecentCounter object with an empty queue q to store request timestamps.
Processing a Ping:

When the ping method is called with a timestamp t:
The timestamp t is added to the queue.
While the oldest timestamp in the queue (q[0]) is outside the range [t - 3000, t], it is removed from the queue using shift.
The length of the queue, which represents the number of requests in the last 3000 milliseconds, is returned.
Efficiency:

Each request is added to the queue once and removed at most once. Therefore, the ping method is efficient, with an amortized time complexity of O(1) per operation.


Walkthrough:

Input
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]


Initialization:

recentCounter = new RecentCounter();
Queue: q = [].
First ping(1):

Add 1 to the queue: q = [1].
Range: [-2999, 1] (all timestamps are valid).
Return 1.
Second ping(100):

Add 100 to the queue: q = [1, 100].
Range: [-2900, 100] (all timestamps are valid).
Return 2.
Third ping(3001):

Add 3001 to the queue: q = [1, 100, 3001].
Range: [1, 3001] (timestamps 1, 100, 3001 are valid).
Return 3.
Fourth ping(3002):

Add 3002 to the queue: q = [1, 100, 3001, 3002].
Remove 1 (out of range): q = [100, 3001, 3002].
Range: [2, 3002] (timestamps 100, 3001, 3002 are valid).
Return 3.

*/


var RecentCounter = function () {
    this.q = []; // Initialize an empty queue to store timestamps
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.q.push(t); // Add the current timestamp to the queue

    // Remove timestamps outside the range [t - 3000, t]
    while (this.q[0] < t - 3000) {
        this.q.shift(); // Remove the oldest timestamp
    }

    // Return the number of timestamps within the valid range
    return this.q.length;
};
