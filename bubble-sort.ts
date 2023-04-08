// -----------BUBBLE SORT ALGORITHM--------------
// Bubble Sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, 
// compares each pair of adjacent items, and swaps them if they are in the wrong order. 
// Inefficient for large lists.
// ****Best case - 0(n)
// ****Worst case - 0(n*2)

function bubbleSort(arr:number[]):number[] {
    let n = arr.length;

    // traverse through all the array elements
    for (let i = 0; i < n; i++) {
        // traverse through the next elements
        for (let j = 0; j < n -i -1; j++) {
            if(arr[j] > arr[j+1]){
                const temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }

    return arr
}

// Example usage
let arr:number[] = [64, 34, 25, 12, 22, 11, 90]
const result = bubbleSort(arr);
console.log(result)