//Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. 
//For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

function DashInsert(str) { 
    let newArr = [];
  
    for (let i = 0; i < str.length; i++){
      if(str[i] % 2 === 1 && str[i + 1] % 2 === 1){
        newArr.push(str[i]);
        newArr.push('-');
      }else {
        newArr.push(str[i])
      }
    }return newArr.join('')
  }