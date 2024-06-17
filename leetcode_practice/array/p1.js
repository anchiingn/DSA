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

// console.log(smallestEqual([1,2,3,4,5,6,7,8,9,0]))


var countMatches = function(items, ruleKey, ruleValue) {
    // let count = 0;
    // for (let i = 0; i < items.length; i++) {
    //     console.log(items[i][1])
    //     if (ruleKey === 'type') {
    //         if (ruleValue === items[i][1]) count++
    //     }
    //     else if (ruleKey === 'color') {
    //         if (ruleValue === items[i][2]) count++
    //     }
    //     else count++
    // }
    // return count

    let count =0;
    for (let item of items) {
        const [phone, color, name] = item;
        if (ruleKey === 'type' && ruleValue === phone || ruleKey === 'color' && ruleValue === color || ruleKey === 'name' && ruleValue === name) {
            count ++
        }
    }
    return count
};

// console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver"))

function winner(andrea, maria, s) {
    // Write your code here
    let a = 0;
    let m = 0;
    
    for (let i =0; i < andrea.length; i++) {
        if (s === 'Odd' && i % 2 !== 0) {
            console.log(andrea[i])
                a += andrea[i] - maria[i]
                m += maria[i] - andrea[i]
        }
        else if (s === 'Even' && i % 2 === 0) {
                a += andrea[i] - maria[i]
                m += maria[i] - andrea[i]
        }
    }
    console.log(a, m)
    if (a > m) return 'Andrea'
    else return 'Maria'
}

// console.log(winner([1, 2, 3], [2, 1, 3], 'Odd'));  // Should tell who wins based on odd indices
// console.log(winner([1, 2, 3], [2, 1, 3], 'Even'));

var removeElement = function(nums, val) {
    let arr = []
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            
            count++;
        }
    }
    return count
};

// console.log(removeElement([3,2,2,3],3))

var merge = function(intervals) {
    //[[1,3],[2,6],[15,18], [8,10]] 
    intervals.sort((a,b) => a[0] - b[0])
    //[[1,3],[2,6],[8,10],[15,18]] after sort

    let curr = intervals[0]; 
    //set the current to be the first arr [1,3]

    let result = [curr]; 
    // the first arr will be push in to result 

    for (let i  = 1; i < intervals.length; i++) {
        let currR = curr[1];
        let nextL = intervals[i][0];
        let nextR = intervals[i][1];

        if (currR >= nextL) { 
            // check if the second num in first arr is bigger or equal to the first num of second array
            // if it is the reasign the second num of the current arr to be the biggest number
            curr[1] = Math.max(currR, nextR)
        }
        else {
            //if not then push that array to result
            result.push(intervals[i]);
            //and set the current array to be the next array to check on the rest
            curr = intervals[i]
        }
    }
 
}

var countPairs = function(nums, target) {
    let count = 0;
    nums.sort((a,b) => a-b)
    for (let i = 0; i < nums.length ; i++) {
        for (let j = i +1; j < nums.length; j++) {
            if (nums[i] + nums[j] < target) {
                count++
            }
        }
    }
    return count
};
// console.log(countPairs([-1,1,2,3,1],2))

var sortPeople = function(names, heights) {
    const sort = names.map((name,i) => {
        return {name:name, height: heights[i]}
    })
    sort.sort((a,b) => b.height-a.height);
    return sort.map(obj => obj.name)
};
// console.log(sortPeople(["Mary","John","Emma"], [180,165,170]))

var heightChecker = function(heights) {
    const expect = [...heights].sort((a,b) => a-b);
    let count = 0;
    for (let i =0; i < heights.length; i++) {
        if (heights[i] !== expect[i]) {
            count++
        } 
    }
    return count
};
// console.log(heightChecker([1,1,4,2,1,3]))


var merge = function(nums1, m, nums2, n) {
    let j = 0;
    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[j];
        j++
    }
    nums1.sort((a,b) => a-b)
};
// console.log(merge([1,2,3,0,0,0], 3, [2,5,6],3))