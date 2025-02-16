function divisibleSumPairs(n, k, ar) {
    let count = 0

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                count++;
            }
        }
    }

    return count
}

// console.log(divisibleSumPairs(6,3,[1,3,2,6,1,2]))


function matchingStrings(strings, queries) {
    // Write your code here
    const arr = [];

    for (let i = 0; i < queries.length; i++) {
        //loop each queries
        let count = 0;
        //loop each strings to combine it with single queries
        for (let j = 0; j < strings.length; j++) {
            if (queries[i] === strings[j]) {
                count++
            }
        }
        //after looping every string the push the count and countinue to next queries
        arr.push(count)
    }
    return arr
}   

console.log(matchingStrings(['ab','ab','abc'], ['ab', 'abc', 'dc']))


function findMedian(arr) {
    // Write your code here
    let sortArr = arr.sort((a,b) => a -b);
    let length = sortArr.length;
    let median =Math.floor(length / 2);
    if (length % 2 === 0) {
        return (arr[median -1 ] + arr[median])/2
    } 
    // return arr[median]
}

console.log(findMedian([0,1,2,3,4,5,6,7,8]))