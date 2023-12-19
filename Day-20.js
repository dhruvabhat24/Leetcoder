/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    return([nums1.filter((e,i)=> nums1.indexOf(e) === i && !nums2.includes(e)),nums2.filter((e,i)=> nums2.indexOf(e) === i && !nums1.includes(e))]);
};
