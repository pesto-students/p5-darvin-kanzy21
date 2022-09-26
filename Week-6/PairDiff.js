const pairDiff = (arr, b)=>{
    const set = new Set(arr);
    for (let i=0;i<arr.length;i++){
        if(set.has(b+arr[i])){
            return 1;
        }
    }
    return 0;
}

console.log(pairDiff([5, 10, 3, 2, 50, 80],78))