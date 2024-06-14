function forLoop(n) {
    var tempHashtag = "#", result = "";
    for (var i = 0; i < n; i++) {
        result += tempHashtag.repeat(i) + "\n";
    }
    return result;
}

console.log(forLoop(10));

function chess(n) {
    var result = "";

    for (var i = 0; i < n; i++) {
        var j = 0, check = true;
        if (i % 2 == 1) {
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

console.log("chess:\n" + chess(15));
