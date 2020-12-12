var demo = 
`35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;

var fs = require('fs');
var filename = "./day9input.txt";

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    runIt(data, 25);
    //console.log(data.split("\r\n"));
})

var checkSum = function(options, answer) {
    var found = false;
    //console.log(answer);
    options.forEach(function(i, ii){
        options.forEach(function(j, ji){
            if (ii != ji) {
                //console.log("does " + answer + " equal " + i + " plus " + j +"?");
                //console.log(i + j);
                if ((parseInt(i) + parseInt(j)) == answer) {
                    found = true;
                }
            }
            //console.log(i + " + " + j)
            
        })
    })
    return found;
}

var runIt = function(data, pre) {
    input = data.split("\r\n");
    //console.log(input)

    input.forEach(function(num, i){
        if (i < pre) {
            return;
        } else {
            var options = input.slice(i-pre, i);
            //console.log(options);
            //options.filter(function())
            if (checkSum(options, input[i]) == false) {
                console.log("THIS ONE: " + input[i]);
            } else {

            };
        }
    });
}





//runIt(demo, 5);
