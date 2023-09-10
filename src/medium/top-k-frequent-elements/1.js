// cheating solution

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const recordMap = new Map();
  for (const n of nums) {
    if (recordMap.has(n)) {
      recordMap.set(n, recordMap.get(n) + 1);
    } else {
      recordMap.set(n, 1);
    }
  }
  const sortMap = new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]));
  return Array.from(sortMap.keys()).slice(0, k);
};
