var demo = ["1-3 a: abcde",
    "1-3 b: cdefg",
    "2-9 c: ccccccccc"
]

var fs = require('fs');
var filename = "day2input.txt";

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    runIt(data.split("\r\n"));
    //runIt(demo);
})

var runIt = function (data) {
    var countOfFound = 0;
    data.forEach(function (i) {
        var nums = i.split(" ")[0],
            letter = i.split(" ")[1][0],
            pw = i.split(" ")[2];

        var x = parseInt(nums.split("-")[0]);
        var y = parseInt(nums.split("-")[1]);

        var instances = 0;

        console.log(pw[x-1]);
        if (pw[x-1] == letter) {
            instances++;
        }

        if (pw[y-1] == letter) {
            instances++;
        }

        console.log("Letter: " + letter + " X: "+ x + " Y: " + y + " PW: " + pw + " INSTANCES: " + instances);

        if (instances == 1) {
            countOfFound++;
        }




        /* pw.split("").forEach(function(c){
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
        })
        */
        

    });
    console.log("TOTAL FOUND: " + countOfFound);
}


// Get numbers between two given :done:

// get selection number

// count how many times selection number appears in string

// does count exist in numbers between?