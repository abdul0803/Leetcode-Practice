
/*
We want to find two vertical lines that can hold the most water between them. 
Think of the lines as the sides of a container, and the x-axis is the bottom.
The area of the container is determined by the height of the shorter line and the distance between the two lines.

How Does the Code Work?
Start with Two Pointers:
One pointer starts at the beginning (i = 0) and the other at the end (j = height.length - 1) of the array.
The idea is to calculate the area between these two lines and then move one of the pointers inward to try and find a larger area.

We calculate the area by using: area = min(height[i], height[j]) * (j - i)
min(height[i], height[j]) gives the height of the shorter line.
(j - i) is the distance between the two lines.
Update the maxResult if this area is larger than the current maximum.

Move the Pointer of the Shorter Line, To potentially find a larger area, move the pointer that points to the shorter line:
If height[i] < height[j], move the left pointer i one step to the right.
Otherwise, move the right pointer j one step to the left.
Why? Because the shorter line is the limiting factor, and moving it might lead to a taller line and a larger area.
Keep Going Until the Pointers Meet. The loop runs until i and j meet. At that point, all possible containers have been checked.


Example Walkthrough:
Take the input height = [1,8,6,2,5,4,8,3,7].

Start with i = 0 and j = 8 (the first and last lines):

Distance = 8, Height = min(1, 7) = 1
Area = 1 * 8 = 8
Move i to 1 because height[0] < height[8].
Now i = 1 and j = 8:

Distance = 7, Height = min(8, 7) = 7
Area = 7 * 7 = 49
Update maxResult to 49.
Move j to 7 because height[8] < height[1].
Next i = 1 and j = 7:

Distance = 6, Height = min(8, 3) = 3
Area = 3 * 6 = 18
Don’t update maxResult (still 49).
Move j to 6 because height[7] < height[1].
Repeat this process until i and j meet. The maximum area found is 49.





*/
var maxArea = function(height) {
    const maxPossibleHeight = 10000;
    let maxResult = 0;
    let i = 0;
    let j = height.length - 1;
    let minHeight = 0;
    do {
        const distance = j - i;
        if (distance * maxPossibleHeight < maxResult) {
            return maxResult;
        }
        if (height[i] < height[j]) {
            minHeight = height[i];
            i += 1;
        } else {
            minHeight = height[j];
            j -= 1;
        }
        const area = minHeight * distance;
        if (area > maxResult) {
            maxResult = area;
        }
    } while (i !== j);
    return maxResult;
};
