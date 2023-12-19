/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    const peakNumber = [...nums].sort((a,b)=> a - b)[nums.length -1 ];
    console.log("peak :",peakNumber);
    return nums.findIndex((n) => n === peakNumber )
};
