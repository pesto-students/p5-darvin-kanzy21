function createStack(){
    let items = [];                 // previously items were inside return statement so encapsulation was breaking
    return{
        push(item){
            items.push(item);
        },
        pop(){
            return items.pop();
        },
        getter(){
            return items;
        }
    };
}
const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.getter());  //[10,5]
console.log(stack.pop());     // 5
console.log(stack.items);     // undefined
stack.items = [10,100,1000];
console.log(stack.getter());    // [10]

