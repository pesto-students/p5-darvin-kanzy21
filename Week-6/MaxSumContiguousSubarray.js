// Input 1: A = [1, 2, 3, 4, -10]
// Output 1: 10
// Explanation 1: The subarray [1, 2, 3, 4] has the maximum possible sum of 10.
// Please provide atleast 1 positive number in an input array


function returnMaxSum(arr) {
    let final_sum = 0;
    let latest_sum = 0;
    let sub_start = 0, sub_end = 0, s = 0;
    arr.forEach((element, i) => {
        latest_sum = latest_sum + element;

        if (final_sum < latest_sum) {
            final_sum = latest_sum
            sub_start = s;
            sub_end = i;
        }
        
        if (latest_sum < 0) {
            latest_sum = 0;
            s = i + 1;
        }
        console.log(`iter ${i} : ${element}, final_sum: ${final_sum}, latest_sum: ${latest_sum}`)
    });
    console.log('Largest sum of contiguous subarray within an array :', final_sum)
    // console.log(latest_sum)
    console.log('Contiguous subarray within an array which has the largest sum :', arr.slice(sub_start, sub_end + 1))

}

returnMaxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])