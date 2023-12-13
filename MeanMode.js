//Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 
//0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). 
//The array will not be empty, will only contain positive integers, and will not contain more than one mode.

function MeanMode(arr) { 
    let mode = 0;
    let maxFreq = 0;
    let counter = {}
    let sum = 0;
  
    for(let i = 0; i < arr.length;i++){
      sum += arr[i];
      let num = arr[i];
  
      if (counter[num]){
        counter[num]++;
      }else {
        counter[num] = 1;
      }
        if(counter[num] > maxFreq){
          maxFreq = counter[num];
          mode = num;
        }
    }
    return mode ===  (sum / arr.length) ? 1 : 0
  }
  