const Fib = {
    n: 10,
    [Symbol.iterator]: function () {
        let i = 1;
        let old = 0;
        let new1 = 0;
        return {
            next: () => {
                if (i++ <= this.n) {
                    [old, new1] = [new1, (old + new1) || 1];
                    return { value: old, done: false }
                } else {
                    return { done: true }
                }
            }
        }
    }
}
console.log([...Fib]);
for (let val of Fib){
    console.log(val);
}

//change n on line number 2 to get more values.