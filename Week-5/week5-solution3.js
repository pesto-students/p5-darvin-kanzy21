function hasDuplicate(arr) {
    setArr = new Set(arr)
    console.log(setArr);
    if (arr.length === Array.from(setArr).length)
        return false;
    return true
}
console.log(hasDuplicate([1, 2, 3, 1]))

// true means array has duplicate values
// false means array has unique values