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

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))