function vowelCount(input){
    let vowelMap = new Map();
    let str = [...input];
    while(str.length){
        if(vowelMap.get(str[0])){
            vowelMap.set(str[0],vowelMap.get(str[0])+1)
        }else{
            vowelMap.set(str[0],1)
        }
        str.shift()
    }
    return vowelMap
}

console.log(vowelCount('darvin'));
