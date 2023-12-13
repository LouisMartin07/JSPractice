//Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
//Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
//Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.


function LetterChanges(str) {
    var newSen = ""; 

    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);

        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            charCode++;

            if (charCode === 91) charCode = 65;
            if (charCode === 123) charCode = 97;
        }
        var newChar = String.fromCharCode(charCode);

        if ("aeiou".includes(newChar)) {
            newChar = newChar.toUpperCase();
        }

        newSen += newChar;
    }
    return newSen;
}