class SmallestInfiniteSet {
  constructor() {
    this.set = new Set(Array.from({ length: 1001 }, (_, i) => i + 1));
  }
}
/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
  if (this.set.size === 0) return null;

  let min = Infinity;

  for (const num of this.set) {
    if (num < min) {
      min = num;
    }
  }

  this.set.delete(min);
  return min;
};

SmallestInfiniteSet.prototype.addBack = function(num) {
     if (!this.set.has(num)) this.set.add(num)
};
