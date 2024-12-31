/*
The asteroidCollision function simulates the collisions between asteroids moving in space. Positive numbers represent asteroids moving to the right, while negative numbers represent asteroids moving to the left. The function calculates the final state of the asteroids after all collisions, adhering to the following rules:

Asteroids moving in the same direction do not collide.
If two asteroids meet:
The smaller asteroid explodes.
If their sizes are equal, both explode.
The larger asteroid survives.
Explanation:
Stack for Active Asteroids: A stack (stack) keeps track of asteroids that haven't collided yet. Asteroids are added to the stack unless a collision occurs.
Collision Check:
A collision happens if the top asteroid in the stack (last) moves to the right (positive) and the current asteroid (curr) moves to the left (negative).
If their sizes are equal (last + curr === 0), both are removed from the stack.
If the current asteroid is larger (Math.abs(curr) > Math.abs(last)), the top asteroid is removed, and the current asteroid remains active for further comparison (i-- ensures rechecking curr with the next asteroid in the stack).
No Collision:
If no collision occurs, the current asteroid is added to the stack.
Final Result:
The stack contains the remaining asteroids after all collisions.
Walkthrough:
Example 1:
asteroids = [5, 10, -5]

Start with an empty stack: stack = [].
5: Push to stack → stack = [5].
10: Push to stack → stack = [5, 10].
-5: Collides with 10 → 10 survives → stack = [5, 10].
Result: [5, 10].
Example 2:
asteroids = [8, -8]

Start with an empty stack: stack = [].
8: Push to stack → stack = [8].
-8: Collides with 8 → Both explode → stack = [].
Result: [].
Example 3:
asteroids = [10, 2, -5]

Start with an empty stack: stack = [].
10: Push to stack → stack = [10].
2: Push to stack → stack = [10, 2].
-5: Collides with 2 → -5 survives → stack = [10].
Result: [10].
*/
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = (asteroids) => {
    const stack = []; // Stack to track active asteroids
    
    for (let i = 0; i < asteroids.length; i++) {
        const last = stack[stack.length - 1]; // Last asteroid in the stack
        const curr = asteroids[i]; // Current asteroid

        if (last > 0 && curr < 0) {
            // Collision occurs (last moves right, curr moves left)
            if (last + curr === 0) {
                // Equal size asteroids collide and cancel each other
                stack.pop();
            } else if (Math.abs(last) < Math.abs(curr)) {
                // Current asteroid is larger, last asteroid explodes
                stack.pop();
                i--; // Recheck the current asteroid
            }
            // If the last asteroid is larger, do nothing (curr explodes)
        } else {
            // No collision, push the current asteroid to the stack
            stack.push(curr);
        }
    }
    
    return stack; // Return the remaining asteroids
};
