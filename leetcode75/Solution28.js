/**
The predictPartyVictory function determines which party, "Radiant" or "Dire," will win in a round-based voting procedure where senators from each party can either ban a senator from the opposing party or declare victory if all remaining senators are from the same party. The function uses two queues to simulate the process efficiently.

Explanation:
Queues for Each Party:

Two queues (R and D) store the indices of senators from the "Radiant" and "Dire" parties, respectively.
The indices represent the current position of the senators in the voting round.
Simulation of the Voting Process:

While both queues are non-empty (i.e., both parties still have senators):
The first senator from each queue (rIndex and dIndex) is taken out.
The senator with the smaller index bans the other senator. The banning senator is then added back to their queue with a new index (currentIndex + n) to represent their participation in the next round.
Victory Determination:

When one of the queues becomes empty, the remaining party is declared the winner.
Walkthrough:
Example 1:
senate = "RD"

Initialize queues: R = [0], D = [1].
Round 1:
Compare rIndex = 0 and dIndex = 1.
Radiant senator bans Dire senator: R = [0 + 2], D = [].
Dire queue is empty. Result: "Radiant".
Example 2:
senate = "RDD"

Initialize queues: R = [0], D = [1, 2].
Round 1:
Compare rIndex = 0 and dIndex = 1.
Radiant senator bans Dire senator: R = [0 + 3], D = [2].
Compare rIndex = 3 and dIndex = 2.
Dire senator bans Radiant senator: R = [], D = [2 + 3].
Radiant queue is empty. Result: "Dire".

 */
var predictPartyVictory = function(senate) {
    const R = []; // Queue for Radiant senators
    const D = []; // Queue for Dire senators
    const n = senate.length;
    
    // Add senators to respective queues
    for (let i = 0; i < n; i++) {
        if (senate[i] === "R") {
            R.push(i); // Store index of Radiant senator
        } else {
            D.push(i); // Store index of Dire senator
        }
    }
    
    // Simulate the voting process
    while (R.length > 0 && D.length > 0) {
        const rIndex = R.shift(); // Remove the first Radiant senator
        const dIndex = D.shift(); // Remove the first Dire senator
        
        if (rIndex < dIndex) {
            // Radiant senator bans Dire senator, re-enqueue with updated index
            R.push(rIndex + n);
        } else {
            // Dire senator bans Radiant senator, re-enqueue with updated index
            D.push(dIndex + n);
        }
    }
    
    // Return the winning party
    return R.length > 0 ? "Radiant" : "Dire";
};
