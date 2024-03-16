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
   

}



/*
    - Count how many apples and orange landed at the inclusive range
*/
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here

}


/*
    - Find if 
*/
function kangaroo(x1, v1, x2, v2) {
    // Write your code here

}