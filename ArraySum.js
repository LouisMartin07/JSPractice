function ArraySum(arr) {
    let newArr = arr.sort((a,b) => a - b);
    let numHigh = newArr[newArr.length - 1]
    let leftover = 0;

    for(let i = 0; i < newArr.length - 1;i++){
        leftover += newArr[i];
    } return leftover === numHigh;
}

console.log(ArraySum([1,2,4,14,6]));