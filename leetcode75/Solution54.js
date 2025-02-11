/**
 * Binary search approach O((n+m)*log(m))
 *
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
        const pairs = [];
        potions.sort((a, b) => a - b);
        const spellsLength = spells.length;
        const potionsLength = potions.length;

        for (let i = 0; i < spellsLength; i++) {
            let count = 0;
            // binary search
            let left = 0;
            let right = potionsLength - 1;
            while (left <= right) {
                // const mid = Math.floor((left + right) / 2);
                const mid = (left + right) >> 1;
                if (spells[i] * potions[mid] >= success) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            count = potionsLength - left;
            pairs.push(count);
        }
        return pairs;
    };
