function increasingTriplet(nums) {
    let min = Number.MAX_VALUE; // First minimum element
    let secondMin = Number.MAX_VALUE; // Second minimum element   
    for (let num of nums) {
        if (num <= min) {
            min = num; // Update the first minimum element
        } else if (num <= secondMin) {
            secondMin = num; // Update the second minimum element
        } else {
            return true; // Found a triplet (min < secondMin < num)
        }
    } 
    return false; // No valid triplet found
}
const nums1 = [1, 2, 3, 4, 5];
console.log(increasingTriplet(nums1)); // Output: true
const nums2 = [5, 4, 3, 2, 1];
console.log(increasingTriplet(nums2)); // Output: false
const nums3 = [2, 1, 5, 0, 4, 6];
console.log(increasingTriplet(nums3)); // Output: true
