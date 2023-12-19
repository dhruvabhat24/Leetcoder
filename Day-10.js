function compress(chars) {
    let index = 0;
    let i = 0;

    while (i < chars.length) {
        let j = i;
        while (j < chars.length && chars[j] === chars[i]) {
            j++;
        }

        chars[index++] = chars[i];

        if (j - i > 1) {
            let count = (j - i).toString();
            for (let digit of count) {
                chars[index++] = digit;
            }
        }

        i = j;
    }

    return index;
}

const chars1 = ["a","a","b","b","c","c","c"];
console.log(compress(chars1)); // Output: 6, chars1: ["a","2","b","2","c","3"]

const chars2 = ["a"];
console.log(compress(chars2)); // Output: 1, chars2: ["a"]

const chars3 = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
console.log(compress(chars3)); // Output: 4, chars3: ["a","b","1","2"]
