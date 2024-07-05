const sumSubArray = (arr) => {
    const n = arr.length;
    let maxSum = -Infinity;
    for (i = 0; i < n; i++) {
        let currSum = 0;
        for (j = i; j < n; j++) {
            currSum += arr[j]
            maxSum = Math.max(maxSum, currSum)
        }
    }
    return maxSum
};

const Example1 = sumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);// Output: 6
const Example2 = sumSubArray([1, 2, 3, -10, 5]);// Output: 6
const Example3 = sumSubArray([-1, -2, -3, -4]);// Output: -1
const Example4 = sumSubArray([5, -3, 6, -7, 6, -1, 4, 6]);// Output: 13
const Example5 = sumSubArray([-2, -3, 4, -1, -2, 1, 5, -3]);// Output: 7
console.log('Example1', Example1)
console.log('Example2', Example2)
console.log('Example3', Example3)
console.log('Example4', Example4)
console.log('Example5', Example5)
