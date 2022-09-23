const mathOperations = require('./index')

require('./index')

test('sum',()=>{
    expect(mathOperations.sum(1,2)).toBe(3)
    expect(mathOperations.diff(2,1)).toBe(1)
    expect(mathOperations.product(2,2)).toBe(4)
})