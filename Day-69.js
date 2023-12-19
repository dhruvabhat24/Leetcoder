/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const minFlips = function (a, b, c) {
    let flips = 0;
    let binA = dec2bin(a);
    let binB = dec2bin(b);
    let binC = dec2bin(c);

    let i = binA.length - 1;
    let j = binB.length - 1;
    let k = binC.length - 1;

    if (j > i) {
        while (i < j) {
            binA = '0' + binA;
            i++;
        }
    } else if (i > j) {
        while (j < i) {
            binB = '0' + binB;
            j++;
        }
    }

    if(i < k){
        while(i < k){
            binA = '0' + binA;
            binB = '0' + binB;
            i++;
            j++;
        }
    } else if (k < i){
        while(k < i){
            binC = '0' + binC;
            k++;
        }
    }

    console.log(binA, binB, binC);

    while (!(binA[i] === undefined && binB[j] === undefined)) {
        if (binC[k] === '0') {
            if (parseInt(binA[i]) || parseInt(binB[j]) !== parseInt(binC[k])) {
                if (parseInt(binA[i]) && parseInt(binB[j]))
                    flips += 2;
                else
                    flips++
            }
        } else {
            if ((parseInt(binA[i]) || parseInt(binB[j])) !== parseInt(binC[k])) {
                flips++;
            }
        }
        j--;
        i--;
        k--;
    }

    return flips
};

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}
