var removeElement = function (nums, val) {
    let k = 0;  //Innititally the track of non-val number
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) { // check if the first element of nums is the same as val
            nums[k] = nums[i]  // if not then change the inital number to the non-val number
            k++; //increase the track by one, to change the next number
        }
    }
    return k
};


// console.log(removeElement([0,1,2,2,3,0,4,2],2))



var removeDuplicates = function (nums) {
    let k = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[k] = nums[i + 1]
            k++;
        }
    }
    return k;
};

// console.log(removeDuplicates([1,1,2]))


var plusOne = function (digits) {
    // console.log(digits)
    // const num = Number(digits.join('')) + 1;
    // console.log(Number(digits.join('')))
    // const digit = num.toString().split('');
    // // console.log(digit)
    // const realDigits = digit.map(Number) 
    // return realDigits

    if (digits.length === 1 && digits[0] === 0) {
        return [1]; // If the array contains only 0, return [1]
    }

    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) { // if the last num is less than 9 then add 1 and return
            digits[i]++      // if the last num is not less than 9 then it will countinue with the next number
            return digits
        }
        else {               // if it is not less than 9 then the last num will be zero
            digits[i] = 0
        }
        
    }
    
    
    digits.unshift(1)
    return digits
    
};

// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,9]))
// console.log(plusOne([0]))
// console.log(plusOne([9,9]))


var romanToInt = function(s) {
    let symbols ={
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    let output = 0

    for (let i = 0; i < s.length; i++) {
       let romanLeft = symbols[s[i]]; //the roman on the left, IV so it will be I
       let romanRight = symbols[s[i+1]]; //the roman on the right , IV so it will be V

       if (romanLeft < romanRight) { // if left roman (I) is less than the right roman (V)
           output += romanRight - romanLeft  //then we will take the right to minus the left, V - I = 5 -1 = 4
           i++   // add one for index so that we move to the next roman, so that we will not check the right roman (V)
       }
       else {
        output += romanLeft
       }
    }
    return output
};

// console.log(romanToInt('MCMXCIV'))


var longestCommonPrefix = function(strs) {
    if (strs.length === 1) return strs[0]; // check if there only one then return that word

    let str = '';
    for (let i = 0; i < strs[0].length; i++) { // this is to iterate each character in the word
        for (let j =0; j < strs.length; j++) // this is to iterate each word in the strs
        if (strs[0][i] !== strs[j][i]) { //compare the every character in the first word with the remaining chacracters of the remaining words
            return str                   
        }

        str += strs[0][i]
    }
    return str
};

// console.log(longestCommonPrefix(["flower","flow","fight"]))



var lengthOfLastWord = function(s) {
    s=s.trim().split(' ') //use trim to remove empty space and use split to put each words individual in an array
   return s[s.length -1].length //return the lenght of the last letter
    
};

// console.log(lengthOfLastWord("   fly me   to   the moon  "))



function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function arrayToTree(arr) {
    if (!arr.length) return null;

    const root = new TreeNode(arr[0]); //the first num of the array will be the root of the tree
    const queue = [root];  // first part of the tree (root)
    // console.log(queue)  // [ TreeNode { val: 1, left: null, right: null } ]

    let i = 1; // since we know the root so we will skip the first num of the array, so we start at the next one so it be at index 1

    while (i < arr.length) { //iterate throught the array 
        const current = queue.shift(); 

        if (arr[i] !== null) { // if the next index is not null
            current.left = new TreeNode(arr[i]);  //then the left side of the current val will be at that index num
            queue.push(current.left); // push this to the queue so we will have 
        }

        i++;

        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);

        }

        i++;
    }

    return root;
}

// var isSameTree = function(p, q) {
//     if (!p && !q) {
//         return true; // Both trees are empty
//     }

//     if (!p || !q) {
//         return false; // One tree is empty, the other is not
//     }

//     if (p.val !== q.val) {
//         return false; // Values of current nodes are different
//     }

//     // Recursively check left and right subtrees
//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };

// const tree1 = arrayToTree([1, 2, 3]);
// const tree2 = arrayToTree([1, 2, 4]);
// console.log(isSameTree(tree1, tree2)); // Output: true



var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    let current = intervals[0]; // [1,3]
    let result = [current]; // [[1,3]]

    for (let i = 1; i < intervals.length; i++) {
        const currRight = current[1]; // 3
        const nextLeft = intervals[i][0];
        const nextRight = intervals[i][1];

        if (currRight >= nextLeft) {   // 3 >= 2
            current[1] = Math.max(currRight, nextRight) //look for the biggest number for the right end of the pair
                                                        //then update the right current to the biggest number
        }
        else {
            result.push(intervals[i]); 
            current = intervals[i]
        }
    }

    return result
};

// console.log(merge([[1,3],[8,10], [9,11],[15,18],[2,6]]))


var isAnagram = function(word1, word2) {
    // if (s.length !== t.length) return false;
    // let anagram = {};

    // for (let i = 0; i < s.length; i++) {
    //     anagram[s[i]] ? anagram[s[i]]++ :anagram[s[i]] = 1;
    // }
    // for (let i = 0; i < s.length; i++) {
    //     anagram[t[i]] ? anagram[t[i]]-- :anagram[t[i]] = 1;
    // }

    // for (let char in anagram) {
    //     if (anagram[char] !== 0) return false;
    // }
    
    // return true
    if (word1.length !== word2.length) return false;

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < word1.length; i++) {
        obj1[word1[i]] ?obj1[word1[i]]++ : obj1[word1[i]] = 1;
        obj2[word2[i]] ?obj2[word2[i]]++ : obj2[word2[i]] = 1;
    }

    for (let char in obj1, obj2) {
        if (obj1[char] !== obj2[char]) {
            return false
        }
    }
    return true
};

// console.log(isAnagram("anagram","nagaram"))


var removeAnagrams = function(words) {
    for (let i = 0; i < words.length-1; i++) { //when you iterate like i + 1, must -1 from it lenght so that it will not iterate the undifind 
        let word1 = words[i].split('').sort().join('');
        let word2 = words[i+1].split('').sort().join('');

        if (word1 === word2) {
            words.splice(i+1,1);
            i--
        } 
    }
    return words
};

// console.log(removeAnagrams(["abba","baba","bbaa","cd","cd"]))



var percentageLetter = function(s, letter) {
    
};