var longestConsecutive = function (nums) {
  if (nums.length == 0) return 0;
  let maxCount = 1;
  let count = 1;
  let temp = null;
  nums
    .sort((a, b) => a - b)
    .forEach((item) => {
      if (temp == null || temp == item) {
        temp = item;
      } else {
        if (item - temp == 1) {
          count += 1;
          if (maxCount < count) maxCount = count;
        } else {
          count = 1;
        }
        temp = item;
      }
    });
  return maxCount;
};
