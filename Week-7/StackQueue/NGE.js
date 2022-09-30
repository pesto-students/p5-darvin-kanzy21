function printNGE(arr, n) {
    let next, i, j;
    for (i = 0; i < arr.length; i++) {
        next = -1;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                next = arr[j];
                break;
            }
        }
        console.log(arr[i] + " -- " + next);
    }
}
let arr = [11, 13, 21, 3];
let n = arr.length;
printNGE(arr, n);