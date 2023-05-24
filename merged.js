
const mergeSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
  }
  
  const merge = (leftArr, rightArr) => {
    const sortedArr = [];
    
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr.shift());
      } else {
        sortedArr.push(rightArr.shift());
      }
    }
    // Append remaining elements (if any)
    return [...sortedArr, ...leftArr, ...rightArr];
  }
  
  // Example usage
  const arr = [29, 7, -2, 5, 0, 8, 1];
  console.log(mergeSort(arr));