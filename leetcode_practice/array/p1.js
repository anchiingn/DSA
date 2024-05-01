/*
    - nums array = [1,2,3] with the length of 3;
    - create another array ans with double the length of nums, so the length is 6; [1,2,3,1,2,3]
    - ans[i] === nums[i] -> so number at ans index must equal to num at nums index -> ans[1] === nums[1] -> 2 === 2
    - and the double number at ans index also equal to number at nums index 
      
*/
var getConcatenation = function (nums) {
    let ans = [...nums];  //because array is refecence type so you must make a copy a new nums array;
    // if you just assign it, it just referene the original array, so when you change the one that assign the original also change;
    // you can use slice(), concat(), or [...nums] to make a new copy of array
    for (let i = 0; i < ans.length; i++) {
        nums.push(ans[i])
    }
    return nums
};


var buildArray = function (nums) {
    const ans = [...nums] // make a copy of new array
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[nums[i]]) // nums[nums[1]] -> nums[2] -> 1 
        ans[i] = nums[nums[i]] // reasign the number at ans index to this number at this nums[nums[i]]
    }
    return ans
};

//another solution it that use .map(), because .map will create and return the new array

// console.log(buildArray([0,2,1,5,3,4]))


var numIdenticalPairs = function (nums) {
    let count = 0;  //count how many good pair there is;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++
            }
        }
    }
    return count
};
// console.log(numIdenticalPairs([1,2,3,1,1,3]))


var finalValueAfterOperations = function (operations) {
    let x = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === '--X' || operations[i] === 'X--') x--;
        else if (operations[i] === '++X' || operations[i] === 'X++') x++;
    }
    return x
};

// console.log(finalValueAfterOperations(["--X","X++","X++"]))


var shuffle = function (nums, n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(nums[2], nums[2 + n])
        break
    }
    return arr
};
// console.log(shuffle([2,5,1,3,4,7],3))


var maximumWealth = function (accounts) {
    let max = 0;
    for (let i = 0; i < accounts.length; i++) {
        accounts[i] = accounts[i].reduce((a, c) => a + c, 0)
        if (max < accounts[i]) {
            max = accounts[i]
        }
    }
    return max
};

// console.log(maximumWealth([[1,2,3],[4,2,1]]))


var numberOfEmployeesWhoMetTarget = function (hours, target) {
    let count = 0;
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) {
            count++
        }
    }
    return count
};

// console.log(numberOfEmployeesWhoMetTarget([0,1,2,3,4],5))


var kidsWithCandies = function (candies, extraCandies) {
    let arr = [...candies];
    for (let i = 0; i < candies.length; i++) {
        candies[i] = candies[i] + extraCandies;
        let max = true; // Initialize max as true for each kid
        for (let j = 0; j < candies.length; j++) {
            if (candies[i] < arr[j]) {
                max = false; // Update max to false if another kid has more candies
                break;
            }
        }
        candies[i] = max; // Set candies[i] to the value of max (true or false)
    }
    return candies;
};


// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3))


var smallestEqual = function(nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        if (i % 10 == nums[i]) arr.push(nums[i]);
    }
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i]
    }
    if (arr.length === 0) return -1
    return min
};

console.log(smallestEqual([1,2,3,4,5,6,7,8,9,0]))