// ---------QUICK SORT ALGORITHM------------
// QuickSort is a divide-and-conquer algorithm that uses recursion to sort an array. 
// It picks an element as a pivot and partitions the given array around the pivot, 
// so that elements smaller than the pivot are on one side and elements greater than the pivot are on the other. 
// It then recursively applies the same algorithm to the subarrays. 
// // Efficient for large arrays.
// ****Worst case - 0(nlogn)

function quickSort(arr: number[]): number[] {
    let n = arr.length;

    if(n <= 1) return arr

    let pivot = arr[0]
    let lesserArr:number[] = []
    let greaterArr:number[] = []

    for (let i = 1; i < n; i++) {
        if (arr[i] < pivot) {
            lesserArr.push(arr[i])
        } else {
            greaterArr.push(arr[i])
        }
    }

    return [...quickSort(lesserArr), pivot, ...quickSort(greaterArr)]
}


// Example usage
let arr: number[] = [64, 34, 25, 12, 22, 11, 90];
arr = quickSort(arr);
console.log("Sorted array is:", arr);