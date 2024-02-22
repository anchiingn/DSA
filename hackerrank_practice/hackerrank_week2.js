function lonelyinteger(a) {
    // Write your code here
    let result = 0
    for (let i = 0; i < a.length; i++) {
        result ^= a[i]
    }
    return result

}

// console.log(lonelyinteger([0,0,1,2,1]))



function gradingStudents(grades) {
    // Write your code here

    for (let i = 0; i < grades.length; i++) {
        
        if (grades[i] < 38) {
            grades[i] = grades[i]
        }
        if(grades[i] >= 38) {
            let mulBy5 = Math.ceil(grades[i]/5)*5
            if (mulBy5 - grades[i] < 3) {
                grades[i] = mulBy5
            }
        }
    }
    return grades

}

// console.log(gradingStudents([73,67,38,33]))


function marsExploration(s) {
    let sos = 'SOS';
    let eachLetter = s.split('');
    let count =0
    for (let i = 0; i < eachLetter.length; i++) {
        console.log(sos[i%2])
        if (eachLetter[i] !== sos[i%3]) count++
    }
    return count
}

// console.log(marsExploration('SOSSPSSQSSOR'))

function pangrams(s) {
    // Write your code here
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const lowercase = s.toLowerCase()
    //iterate each char to check if the sentence have every char
    for (let char of alphabet ) {
        if(!lowercase.includes(char)) {
            return false
        }
    }
    return true
}

console.log(pangrams('We promptly judged antique ivory buckles for the  prize'))