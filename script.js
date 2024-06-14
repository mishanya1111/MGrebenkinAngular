function forLoop(n) {
    var tempHashtag = "#", result = "";
    for (var i = 0; i < n; i++) {
        result += tempHashtag.repeat(i+1) + "\n";
    }
    return result;
}

console.log(forLoop(4));

function chess(n) {
    var result = "";

    for (var i = 0; i < n; i++) {
        var j = 0, check = true;
        if (i % 2 === 1) {
            result += " ";
            j++;
        }
        while (j < n) {
            if (check) {
                result += "#";
                check = false;
            } else {
                result += " ";
                check = true;
            }
            j++
        }
        result += "\n";


    }
    return result;
}

console.log("chess:\n" + chess(4));


function min(a , b) {
    if( a < b) return a;
    return b;
}

var a= 3, b = 4;
console.log("min between " + a + " and " + b + " is:" + min(a,b));

a= 5.1;
b = -1.2;
console.log("min between " + a + " and " + b + " is:" + min(a,b));

function isEven(n) {
    return n % 2 === 0;
}
var num = 1;
console.log("The number " + num + " is even? Answer: " + isEven(num) );

num = 2;
console.log("The number " + num + " is even? Answer: " + isEven(num) );