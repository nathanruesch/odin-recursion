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

function fibsRec(num) {
    let returnArray = [];
    let result = 0;
    let cur = 1;
    let temp = 0;

    while (num !== 0) {
        console.log("This was printed recursively");
        returnArray.push(result);
        temp = result;
        result = cur + result;
        cur = temp;
        num--;
    }

    return returnArray;
}

