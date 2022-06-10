exports.factorial = function(num){
    if(num === 1){
        return 1
    }else{
       return num * factorial(num-1)
    }
}

exports.palindrome = function(string) {
    if (string.length <= 1) {
        return true
    } else {
        if (string[0] === string[string.length-1]){
            return palindrome(string.slice(1, string.length-1))
        } else{
            return false
        }
    }
};

exports.bottleSong = function(n) {
    if (n === 2) {
        return console.log("2 bottles of beer on the wall, 2 bottles of beer."
        +"\nTake one down and pass it around, 1 bottle of beer on the wall."
        +"\n1 bottle of beer on the wall, 1 bottle of beer."
        +"\nTake one down and pass it around, no more bottles of beer on the wall."
        +"\nNo more bottles of beer on the wall, no more bottles of beer."
        +"\nGo to the store and buy some more, 99 bottles of beer on the wall.")
    } else {
        console.log(`${n} bottles of beer on the wall, ${n} bottles of beer.` 
        +`\nTake one down and pass it around, ${n-1} bottles of beer on the wall.`)
    }
    bottleSong(n - 1)
}

exports.romanNum = function(num) {
    const romanKeyMap = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let result = ""
    if (num === 0){
        return result
    } else {
        for (let key in romanKeyMap) {
            if (num>= romanKeyMap[key]) {
                return result +=key + romanNum(num - romanKeyMap[key])
            }
        }
    }
};
