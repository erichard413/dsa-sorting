/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/


// function pivot(arr, start=0, end=arr.length-1){
//     let pivotIdx = start;
//     let pivotVal = arr[start];
//     let result = [pivotVal];
//     arr.shift();
//     for(let i = start; i<end; i++){
//         if (arr[i] > pivotVal) {
//             result.push(arr[i]);
//         } else {
//             result.unshift(arr[i]);
//             pivotIdx++;
//         }
//     }
//     for (let j = start; j<end; j++) {
//         if (j === pivotIdx){
//             arr[j] = pivotVal;
//         } else {
//             arr[j] = result[j];
//         }        
//     }
//     return pivotIdx;
// }

function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
  }
/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivotIndex = pivot(arr, left, right);
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
  }

module.exports = {quickSort, pivot};