//Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. 
//For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. 
//If there are no words with repeating letters return -1. Words will be separated by spaces.

function LetterCountI(str) {
    let words = str.split(" ");
    let maxRepeatedWord = "";
    let maxRepetitions = 0;
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let letterCounts = {};
      let highestRepetitionInWord = 0;
  
      for (let j = 0; j < word.length; j++) {
        let letter = word[j];
        letterCounts[letter] = (letterCounts[letter] || 0) + 1;
        highestRepetitionInWord = Math.max(highestRepetitionInWord, letterCounts[letter]);
      }
  
      if (highestRepetitionInWord > maxRepetitions) {
        maxRepetitions = highestRepetitionInWord;
        maxRepeatedWord = word;
      }
    }
    return maxRepetitions > 1 ? maxRepeatedWord : -1;
  }