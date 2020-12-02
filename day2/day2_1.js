var fs = require('fs');
var filename = "day2input.txt";

fs.readFile(filename, 'utf8', function(err, data){
    if (err) throw err;
    runIt(data.split("\r\n"));
})

var runIt = function(data) {
    var countOfFound = 0;
    data.forEach(function(i){
        var nums = i.split(" ")[0],
        letter = i.split(" ")[1][0],
        pw = i.split(" ")[2];

    var valid = getNumbers(nums);

    var countOfValid = 0;
    pw.split("").forEach(function(c){
        //console.log("C: " + c);
        if (c == letter) {
            countOfValid++;
        }
    });

    //console.log(countOfValid + " VALID: " + valid);

    valid.forEach(function(n){
        if (n === countOfValid) {
            countOfFound++;
            //console.log("FOUND ONE: " + data)
        }
    })
    /* console.log();
    console.log(letter);
    console.log(pw); */
    })
    console.log("TOTAL FOUND: " + countOfFound);
    
}

var getNumbers = function(str) {
    var list = [];
    var low = parseInt(str.split("-")[0]);
    var high = parseInt(str.split("-")[1])
    for (var i = low; i <= high; i++) {
        list.push(i);
    }

    return list;
}

// Get numbers between two given :done:

// get selection number

// count how many times selection number appears in string

// does count exist in numbers between?