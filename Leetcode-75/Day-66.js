function minDistance(word1, word2) {
    const matrix = [];

    for (let i = 0; i <= word1.length; i += 1) {
        matrix[i] = [];

        for (let j = 0; j <= word2.length; j += 1) {
            if (i === 0) {
                matrix[i][j] = j;
                continue;
            }
            
            if (j === 0) {
                matrix[i][j] = i;
                continue;
            }

            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + (word1[i - 1] !== word2[j - 1])
            );
        }
    }

    return matrix[word1.length][word2.length];
};
