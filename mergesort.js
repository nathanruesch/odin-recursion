function mergesort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let left = mergesort(arr.slice(0, mid));
    let right = mergesort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let sortedArr = [];

    while (left.length && right.length) {
        console.log("Sorting array recursively");
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }

    return [...sortedArr, ...left, ...right];
}

let inputArray = [5, 78, 12, 67, 12, 8, 1, 82, 803, 1243, 777, 111, 63, 24, 37];
let array = mergesort(inputArray);

console.log(inputArray);
console.log(array);