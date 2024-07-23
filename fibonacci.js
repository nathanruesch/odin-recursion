function fibs(num) {
    let returnArray = [];
    let result = 0;
    let cur = 1;
    let temp = 0;

    for (let i = 0; i < num; i++) {
        returnArray[i] = result;
        temp = result;
        result = cur + result;
        cur = temp;
    }

    return returnArray;
}

let temp = fibs(15);
console.log(temp);