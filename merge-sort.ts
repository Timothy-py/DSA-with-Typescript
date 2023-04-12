// MERGE SORT
// Merge Sort is a divide-and-conquer algorithm that divides the input array into two halves, 
// sorts each half, and then merges them back together. It works by repeatedly dividing the 
// input array into halves until it can no longer be divided.
// Efficient for large arrays.
// ****Worst case - 0(nlogn)

function mergeSort(arr:number[]): number[] {
    // if the array has only one element
    if(arr.length <= 1) return arr

    // divide the array ino two sub-arrays
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)

    // reccursively sort the two sub-arrays
    const sortedLeftArr = mergeSort(leftArr)
    const sortedRightArr = mergeSort(rightArr)

    // merge the two sorted sub-arrays into a single sorted array
    // return merge()
    return []
}

function merge(leftArr:number[], rightArr:number[]): number[] {
    let resultArr: number[] = []

    // compare the elements in the left and right arrays and add them
    while (leftArr.length && rightArr.length) {
        if(leftArr[0] < rightArr[0]){
            resultArr.push(leftArr.shift()!)
        } else {
            resultArr.push(rightArr.shift()!)
        }
    }

    // add any remaining elements from the left array to the result array
    while (leftArr.length) {
        resultArr.push(leftArr.shift()!)
    }

    // add any remaining elements from the right array to the result array
    while (rightArr.length) {
        resultArr.push(rightArr.shift()!)
    }

    return resultArr;
}

console.log(mergeSort([64, 34, 25, 12, 22, 11, 90]))