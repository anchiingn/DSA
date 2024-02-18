function plusMinus(arr) {
    // Write your code here
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === 0) {
            zero++;
        }
        if (arr[i] > 0) {
            positive++;
        }
        if (arr[i] < 0) {
            negative++;
        }
    }
    
    const p = positive / arr.length;
    const n = negative / arr.length;
    const z = zero / arr.lenght;
    
    console.log(p);
    console.log(n);
    console.log(z);
}

// console.log(plusMinus([-4, 3, -9, 0, 4, 1]))


function miniMaxSum(arr) {
    // Write your code here
    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
        if (max < arr[i]) max = arr[i];
        sum += arr[i]
    }
    const maxSum = sum - max;
    const minSum = sum - min;
    
    console.log(minSum)
    console.log(maxSum)
    

}

console.log(miniMaxSum([1, 2, 3, 4, 5])) //10 14