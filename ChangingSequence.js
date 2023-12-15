//Have the function ChangingSequence(arr) take the array of numbers stored in arr and return the index at which the numbers stop increasing 
//and begin decreasing or stop decreasing and begin increasing. For example: if arr is [1, 2, 4, 6, 4, 3, 1]
//then your program should return 3 because 6 is the last point in the array where the numbers were increasing 
//and the next number begins a decreasing sequence. 
//The array will contain at least 3 numbers and it may contains only a single sequence, increasing or decreasing. 
//If there is only a single sequence in the array, then your program should return -1. Indexing should begin with 0.

function ChangingSequence(arr) {
    // Check if the sequence starts with increasing or decreasing
    let isIncreasing = arr[1] > arr[0];

    for (let i = 1; i < arr.length - 1; i++) {
        if (isIncreasing && arr[i] > arr[i + 1]) {
            // Found the change from increasing to decreasing
            return i;
        } else if (!isIncreasing && arr[i] < arr[i + 1]) {
            // Found the change from decreasing to increasing
            return i;
        }
    }

    // If no change in sequence is found, return -1
    return -1;
}