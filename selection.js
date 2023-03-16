function swap(arr, idx, minValIdx) {
    let temp = arr[minValIdx];
    arr[minValIdx] = arr[idx];
    arr[idx] = temp;
    return arr;
}

function selectionSort(arr) {
    for(let i = 0; i<arr.length; i++) {
        let lowest = arr[i];
        let lowestIdx;
        for(let j=i; j<arr.length; j++){
            if (arr[j] <= lowest) {
                lowest = arr[j]
                lowestIdx = j;
            }
        }
        arr = swap(arr, i, lowestIdx); 
    }
    return arr;
}

module.exports = selectionSort;
