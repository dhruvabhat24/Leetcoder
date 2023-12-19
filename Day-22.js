/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;
    let arr1 = new Array(26).fill(0);
    let arr2 = new Array(26).fill(0);

    for (let i = 0; i < word1.length; i++) {
        arr1[word1[i].charCodeAt() - 'a'.charCodeAt()]++;
        arr2[word2[i].charCodeAt() - 'a'.charCodeAt()]++;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] && !arr2[i] || arr2[i] && !arr1[i]) return false;
    }

    arr1.sort((a,b) => b-a)
    arr2.sort((a,b) => b-a)
    
    let j = 0;
    while ( j < arr1.length) {
        if (arr1[j] != arr2[j]) return false;
        if (arr1[j] <= 0 && arr2[j] <= 0) break;
        j++;
    }

    return true;


};
