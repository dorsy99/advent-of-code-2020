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
    runIt(data);
    //console.log(data.split("\r\n"));
})

var runIt = function(data) {
    input = data.split("\r\n");
    //var answer = 127;
    var answer = 3199139634; //from prev day

    input.forEach(function(num, i){
        //console.log("running for " + num + " on " + i);
        var sum = 0;
        var curInt = i;
        var numsUsed = [];
        while(sum < answer) {
            sum = sum + parseInt(input[curInt]);
            numsUsed.push(parseInt(input[curInt]))
            if (sum == answer) {
                console.log("FOUND: " + numsUsed);
                console.log(numsUsed.sort()[0] + numsUsed.sort()[numsUsed.length-1])
            } else {
                curInt++;
            }
            
            //console.log(sum);
        }
    })
    
}

//runIt(demo);