var threeSum = function (array, target) {
    array.sort((a, b) => a - b);
    const triplets = [];
    let currentSum = 0;
    let currentDiff = 0;
    let flag = false
    for (let i = 0; i < array.length - 2; i++) {
        if (array[i] != array[i - 1]) { // making sure our solution set does not contain duplicate triplets
            let left = i + 1;
            let right = array.length - 1;

            while (left < right) {
                console.log(array[i], array[left] , array[right])
                currentSum = array[i] + array[left] + array[right];
                let latestDiff = Math.abs(target - currentSum);
                if(!flag){
                    currentDiff = latestDiff
                    flag = true
                }
                if(latestDiff === 0 || latestDiff<=currentDiff){
                    triplets.splice(0,triplets.length);
                    triplets.push(array[i], array[left], array[right]);
                }
                left++;
                right--;
            }
        }
    }
    return triplets
};
console.log(threeSum([2, 3, 4, 8], 1))

// TC : O(n^2)
// SC : O(1)