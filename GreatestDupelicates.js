function countLetters(str) {
    let wordLetterCounts = {};
    let words = str.split(" ");

    for (let word of words) {
        if (!wordLetterCounts[word]) {
            wordLetterCounts[word] = {};
        }

        for (let char of word) {
            if (char in wordLetterCounts[word]) {
                wordLetterCounts[word][char]++;
            } else {
                wordLetterCounts[word][char] = 1;
            }
        }
    }

    return wordLetterCounts;
}
console.log(countLetters("Javascript is the best programming language"));