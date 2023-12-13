//Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. 
//Words will be separated by only one space.

function LetterCapitalize(str) { 
    let strArr = str.split(" ");
  
      for(let i = 0; i <strArr.length;i++){
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }
    return strArr.join(" ")
  }   