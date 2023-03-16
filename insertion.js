function insertionSort(arr) {
    for (i = 1; i < arr.length; i++){ 
        let val = arr[i];
        let j = i - 1; 
        // while you are not at the begining of the arr, and the previous item is GREATER than current ITEM.
        while (j >= 0 && arr[j] > val){ 
            arr[j + 1] = arr[j]; 
            j--;
        } 
        arr[j + 1] = val;
    } 
    return arr;
}

module.exports = insertionSort;
