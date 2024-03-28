var removeElement = function(nums, val) {
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



var removeDuplicates = function(nums) {
    let k = 0;  
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i +1]) {
            nums[k] = nums[i +1]
            k++;
        }
    }
    return k ;
};

console.log(removeDuplicates([1,1,2]))