function plusMinus(arr) {
    // Write your code here
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === 0) {
            zero++;
        }
        if (arr[i] > 0) {
            positive++;
        }
        if (arr[i] < 0) {
            negative++;
        }
    }
    
    const p = positive / arr.length;
    const n = negative / arr.length;
    const z = zero / arr.lenght;
    
    console.log(p);
    console.log(n);
    console.log(z);
}

// console.log(plusMinus([-4, 3, -9, 0, 4, 1]))


function miniMaxSum(arr) {
    // Write your code here
    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
        if (max < arr[i]) max = arr[i];
        sum += arr[i]
    }
    const maxSum = sum - max;
    const minSum = sum - min;

    console.log(minSum)
    console.log(maxSum)
    

}

// console.log(miniMaxSum([1, 2, 3, 4, 5])) //10 14

function timeConversion(s) {
    // Write your code here
    let newTime = s.split(':');
    console.log(newTime)
    let hour = newTime[0];
    let min = newTime[1];
    let sec = newTime[2].slice(0,2);
    
    if (s.includes('PM')) {
        if (hour === '12') {
            hour = '12'
        }
        else {
            hour = `${Number(hour) + 12}`
        }
        return `${hour}:${min}:${sec}`
    }
    if (hour === '12') {
        hour = '00'
    }
    return `${hour}:${min}:${sec}`
}

// console.log(timeConversion('07:05:45PM'))
// console.log(timeConversion('12:05:45PM'))
// console.log(timeConversion('12:40:22AM'))


function breakingRecords(scores) {
    // Write your code here
    let min = scores[0]
    let max = scores[0]
    let countMax = 0
    let countMin = 0
    
    for (let i = 1; i < scores.length; i++) {
        if (min > scores[i]) {
            min = scores[i]
            countMin++
        }
        if (max < scores[i]) {
            max = scores[i]
            countMax++
        }
    }
    return [countMax, countMin]
}

// console.log(breakingRecords([10,5,20,20,4,5,2,25,1]))
// console.log(breakingRecords([12,24,10,24]))


function processData(input) {
    const str = input.split(';');
    let words = [];

    if (str[1] === 'M') {
        if (str[2].includes('()')) {
            str[2] = str[2].slice(0,-2)
        } 
        else {
            str[2] = str[2] + '()'
        }
    }

    if (str[0] === 'S') {
        for (let i = 0; i < str[2].length; i++) {
            if (str[2][i] === str[2][i].toUpperCase()) {
                words = (str[2].split(/(?=[A-Z])/)).join(' ').toLowerCase();
            }
        }
    }


    return words
}


console.log(processData('S;M;plasticCup()'))
console.log(processData('S;M;plasticCup'))