/*
    - Find how many pair of sock that paired by color
    - find if the first sock match with the next sock, 
        - if it match then put them to another arr for matching socks
    - loop throght all of them until there no more match
    - after find all the matching sock, take the lenght of the new array and divided by two to find the total of matched pairs
*/
function sockMerchant(n, ar) {
    let matchedPair = [];
    for (let i = 0; i < n; i++) {
        for (let j = i +1; j < n; j++) {
            if (ar[i] === ar[j]) {
                matchedPair.push(ar[i],ar[j])
                ar[j] = null // turn it into null so it will not check thsi sock again
                break //stop when it found it pair
            }
            
        }
    }
    const total = matchedPair.filter(sock => sock != null)
    return total.length/2
}
// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))


function breakingRecords(scores) {
    // Write your code here
    let highest = scores[0];
    let lowest = scores[0];
    let h = 0;
    let l = 0;

    for (let i = 0; i < scores.length; i++) {
        if (highest < scores[i]) {
            highest = scores[i];
            h++
        }

        if (lowest > scores[i]) {
            lowest = scores[i];
            l++
        }

    }
    return [h,l]

}
// console.log(breakingRecords([10,5,20,20,4,5,2,25,1]))


function birthday(s, d, m) {
    // Write your code here
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let sum = 0;
        for (let j = i; j < i + m; j++) {   // i(1) + m(2) = 3 so it will stop iterate when j is 2, so at index 1 it will stop at 2
            sum += s[j];                   // it will count 2(j=1) and 1
        }
        if (sum === d) count++;
    }
    return count
}

// console.log(birthday([1,2,1,3,2],3,2))


function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count = 0;
    for (let i = 0; i < ar.length; i++) {
        for (let j = i +1; j < ar.length; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                console.log(ar[i], ar[j])
            }
        }
    }
    return count
}

// console.log(divisibleSumPairs(6,3,[1,3,2,6,1,2]))


function migratoryBirds(arr) {
    // Write your code here
    
    
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))



