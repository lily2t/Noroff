//the most basic sorting algorithms
//swap function which will be used for al
function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

// 1. bubble sort

function bubble(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[j] > arr[i]) {
                swap(arr, i, j);
                counter++;
            }
        }
    }
    return { arr, counter };
    re
}
let unsorted_array = [5, 6, 2, 7, 1, 8, 2]
let sorted_array = bubble(unsorted_array)
document.write(`The sorted array with bubble sort is: 
 ${sorted_array.arr} and the number of iteration is: ${sorted_array.counter}  <br />`)


//2. insertion sorting

function insertion(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j] > arr[j - 1]) {
            count++;
            swap(arr, j, j - 1)
            j--

        }
    }
    return { arr, count };
}
let sortedArray = insertion(unsorted_array)
document.write(`The sorted array with insertion sort is: 
 ${sortedArray.arr} and the number of iteration is:  ${sortedArray.count}<br />`)

//3. Selection sort

function selection(arr) {
    let minIndex;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            count++
            if (arr[minIndex] > arr[j]) {
                minIndex = j;

            }
        }
        if (i !== minIndex) {
            swap(arr, i, minIndex);
        }
    }
    return { arr, count }
}
let sortedArray_Selection = selection(unsorted_array)
document.write(`The sorted array with selection sort is: 
 ${sortedArray_Selection.arr} and the number of iteration is: 
  ${sortedArray_Selection.count}`)
