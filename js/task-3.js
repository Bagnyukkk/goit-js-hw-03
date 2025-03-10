function filterArray(numbers, value) {
    let resultArray = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > value)
            resultArray.push(numbers[i]);
    }
    return resultArray;
}

console.table(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.table(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.table(filterArray([1, 2, 3, 4, 5], 5)); // []
console.table(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.table(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
