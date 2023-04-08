// It iterates over an array, and for each element, it finds the right position to insert it 
// into the already sorted subarray to its left.
// Inefficient for large lists.
// ****Best case - 0(n)
// ****Worst case - 0(n*2)

function insertionSort(arr:number[]): number[] {
    let n = arr.length;

    // Traverse through all array elements
    for (let i = 0; i < n; i++) {
        let current = arr[i]
        let j = i - 1;

        // move the elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
        while (j>=0 && arr[j] > current) {
            arr[j+1] = arr[j]
            j = j-1
        }

        arr[j+1] = current;
    }
    return arr;
}

// Example usage
let unsort_arr:number[] = [64, 34, 25, 12, 22, 11, 90]
const sort_arr = insertionSort(unsort_arr);
console.log(sort_arr)