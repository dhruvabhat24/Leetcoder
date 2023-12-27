/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  const hash = {};

  for (const el of nums) {
    if (!hash[el]) {
      hash[el] = 1;
    } else {
      delete hash[el]
    }
  }

  return Object.keys(hash)[0];
};
