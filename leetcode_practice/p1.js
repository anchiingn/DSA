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

