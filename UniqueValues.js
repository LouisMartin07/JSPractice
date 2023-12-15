//return true only if all values are unique, otherwise false
//using Array, Object method lastIndexOf() and Set()
//no srt data structure

//using an Arr
function unique(str) {
   let newArr = [];

    for(let letter of str){
        if(newArr.indexOf(letter) !==-1){
            return false;
        }
        newArr.push(letter);
    }
    return true;
}

//now using an Obj

function unique(str) {
    let newArr = {};

    for(let letter of str){
        if(newArr[letter]){
            return false;
        }
        newArr[letter] = "exists";
    }
    return true;
}

console.log(unique("abcdefga")) {
return new Set(str).size === str.length;
}