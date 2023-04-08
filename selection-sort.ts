// Selection Sort sorts an array by repeatedly finding the minimum element from the unsorted part 
// of the array and swapping it with the first element of the unsorted part. 
// Inefficient for large lists.
// ****Best case - 0(n)
// ****Worst case - 0(n*2)

function selectionSort(arr:number[]): number[] {
    let n = arr.length
    
    // Traverse through the array elements
    for (let i = 0; i < n; i++) {
        // find the minimum element in the remaining unsorted array
        let indexOfMin = i;
        for (let j = i+1; j < n; j++) {
            if(arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }

        // swap the new found minimum element with the first element...of the unsorted array
        [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]]
    }

    return arr
}

// Example usage
let array:number[] = [64, 34, 25, 22, 22, 11, 90]
const sorted = selectionSort(array);
console.log(sorted)