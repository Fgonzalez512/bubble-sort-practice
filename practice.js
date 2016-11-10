var array = [1, 45, 3, 7, 78, 10, 9];

console.log('unsorted ---', array);

function bubbleSort(array) {

    for (i = 0; i <= array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            temp = array[i + 1];
            array[i + 1] = array[i];
            array[i] = temp;
            i = i - 2;
        }
    }
    return array;
};


bubbleSort(array);
console.log('sorted ----', array);


module.exports = bubbleSort;
