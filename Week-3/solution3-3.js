function createIncrement(){
    let count = 0;
    function increment(){
        count++;
    }
    let message = `Count is ${count}`;
    function log(){
        console.log(message);
    }
    return [increment,log];
}
const [increment,log] = createIncrement();
increment();    // count++ // 1
increment();    // count++ // 2
increment();    // count++ // 3
log();          // 0
/* 

Explaination:

The expected output is 3 but the actual output is 0;
This is because in log() we are printing the message and not the actual count.
So when log() is called in line 16:
line 8 is executed -> message is on line 6 -> but in line 6 it is finding for count 
-> count is found on line2 in the lexical scope -> but its initialized at 0;
*/