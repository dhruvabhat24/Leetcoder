/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    const temp = [0];
    let alt = 0;
    for (let i = 0; i < gain.length; i++) {
        alt += gain[i];
        temp.push(alt);
    } return Math.max(...temp);
};
