/*
    - Find the total comparation point of a and b who have the most point by compare who
      have the most triplet num.
    - if a[1] > b[1], then a get 1 point
      if a[2] < b[2], then b get 1 point
      if a[3] = b[3], then no one get point
    - return the point of a and b in array [point a, point b]
*/
function compareTriplets(a, b) {
    let pointA = 0;
    let pointB = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            pointA++
        }
        else if (a[i] < b[i]) {
            pointB++
        }

    }
    return [pointA, pointB]
}

// console.log(compareTriplets([5,6,7],[3,6,10]))


/*
    - find the absolute difference between the two diagonals 
    - arr =

       [[11, 2, 4],
        [4, 5, 6,],
        [10, 8, -12]]

        11 (arr[0][0]) + 5 (arr[1][1]) + -12 (arr[2][2]) = 4
        4 (arr[0][2]) + 5 (arr[1][1]) + 10 (arr[2][0]) = 19

*/
function diagonalDifference(arr) {
    let diagonalLeftToRight = 0;
    let diagonalRightToLeft = 0;

    for (let i = 0; i < arr.length; i++) {
        diagonalLeftToRight += arr[i][i];
        diagonalRightToLeft += arr[i][arr.length - 1 - i]
    }
    return Math.abs(diagonalLeftToRight - diagonalRightToLeft)
}

// let ar = [[11, 2, 4],
//           [4, 5, 6,],
//           [10, 8, -12]]
// console.log(diagonalDifference(ar))



/*
    - Find how many tallest candle
    - look for the biggest number of the candel height
    - if that the number is the tallest then count to see how many there are
*/
function birthdayCakeCandles(candles) {
    let tallest = candles[0];
    let count = 0;
    for (let i = 0; i < candles.length; i++) {
        if (tallest < candles[i]) {
            tallest = candles[i];
            count = 1; // Reset count to 1 when encountering a new tallest candle
        } else if (tallest === candles[i]) { //if it not smaller to the rest of the num but equal to than count one 
            count++;
        }
    }
    return count;
}

// console.log(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]))



/*
    - Count how many apples and orange landed at the inclusive range
*/
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let apple = 0;
    let orange = 0;
    for (let i = 0; i < apples.length || i < oranges.length; i++) {
        if (a + apples[i] >= s && a + apples[i]  <= t) {
            apple++
        }
        
        if ( b + oranges[i] >= s && b + oranges[i]  <= t) {
            orange++
        }
    }
    console.log(apple,orange)

}

// console.log(countApplesAndOranges(7,11,5,15,[2,-2,1],[5,-6]))


/*
    - Find if the two kangaroo jump to the same location
*/
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    if (v1 <= v2)
        return "NO"
    else {
        if (((x2 - x1) % (v1 - v2)) == 0)
            return "YES"
        else
            return "NO"
    }

}
// console.log(kangaroo(0,2,5,3))



function miniMaxSum(arr) {
    // Write your code here
    let max = arr[0];
    let min = arr[0];
    let t = 0;
    let i =0;
    while (i< arr.length) {
        if (max < arr[i]) {
            max = arr[i]
        }
        if (min > arr[i]) min = arr[i];
        t += arr[i]
        i++
    }
    console.log(t -max, t - min)
    
}
// console.log(miniMaxSum([1,2,3,4,5]))


/*
    - find if B correctly split the bill to A, find how mnuch B own A.

    - bill: an array of integers representing the cost of each item ordered
      k: an integer representing the zero-based index of the item Anna doesn't eat
      b: the amount of money that Anna contributed to the bill

    - for example if this is the cost of each item ordered [3, 10, 2, 9]

        - if A don't eat item at index 1 (k), which the cost is [10], then A don't have to pay for this.
        - add all the remaining cost together A share with B, so it be [3 + 2 + 9] = 14
        - the split of the bill will be half of the total, so 14 / 2 = 7
        - but B charged A is 12 (b), take what B charge minus the split bill, so it is 12 - 7 = 7
            - this make B overcharged A, and B need to refund A the overcharged
            - but if what B charge minus the split bill equal to 0, then B did not overcharged A, so print 'Bon Appetit'

*/
function bonAppetit(bill, k, b) {
    // const item =  bill.splice(k, 1)
 
    // let total = 0;
    // for (let i = 0; i < bill.length; i++) {
    //     total += bill[i]
    // }
    // let split = total/2
    // if (b - split === 0) {
    //     return 'Bon Appetit'
    // }
    // return b - split


    const item = bill.filter(i => i != bill[k])
    
    const total = item.reduce((a,c) => (a+c),0)

    const split = total /2

    if (b - split === 0) {
        return 'Bon Appetit'
    }
    return b - split
}

// console.log(bonAppetit([ 72, 53, 60, 66, 90, 62, 12, 31, 36, 94], 6, 288))

