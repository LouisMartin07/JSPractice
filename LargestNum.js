//Write a function that returns true if the input string has the exact same number of occurrences otherwise return false.
function occurrences(str){
    let obj = {};

    for(let letter of str){
        if(letter in obj){
            obj[letter]++;
        }else {
            obj[letter] = 1;    
        }
    }return obj
}

console.log(occurrences("aabbccdd"));



//test cases:
//"aabbccdd" --> true
//"abc" ---> true
//"abcdd" ---> false
//"hhhhheeeeeolllllo" ----> false