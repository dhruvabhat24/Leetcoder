const removeStars = function (s) {
  const letters = [];

  for (const char of s) char === "*" ? letters.pop() : letters.push(char);

  return letters.join("");
};
