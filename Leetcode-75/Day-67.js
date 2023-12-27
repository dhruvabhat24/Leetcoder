/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const output = [];
    for (let i = 0; i <= n; i++) {
        let value = 0;
        const binaryString = i.toString(2);
        for (let j = 0; j < binaryString.length; j++) {
            value += Number(binaryString[j]);
        }
        output.push(value);
    }
    return output;
};
