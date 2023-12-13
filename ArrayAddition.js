//Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array 
//(excluding the largest number) can be added up to equal the largest number in the array, otherwise return the string false. 
//For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. 
//The array will not be empty, will not contain all the same elements, and may contain negative numbers.

function ArrayAdditionI(arr) { 
    let number = 0;
    let total = 0;

  for(let num of arr){
    if (num > number){
      number = num;
    }
  } let newArr = arr.filter((x) => x < number);
  for (let i = 0; i < newArr.length; i++){
    total += newArr[i];
  }
return total >= number ? true : false
}