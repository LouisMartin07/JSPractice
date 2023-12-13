//Have the function ABCheck(str) take the str parameter being passed and return the string true 
//if the characters a and b are separated by exactly 3 places anywhere in the string at least once 
//(ie. "lane borrowed" would result in true because there is exactly three characters between a and b). 
//Otherwise return the string false.

function ABCheck(str) { 
    let newArr = str.split('');
  
      for(let i = 0; i < newArr.length; i++){
        if (newArr[i] === 'a'){
          if(newArr[i + 4] === 'b'|| newArr[i - 4] === 'b'){
            return true
          }
        }
      }
      return false
  }