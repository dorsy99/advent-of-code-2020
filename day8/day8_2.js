var demo = 
`nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;

var fs = require('fs');
var filename = "day8input.txt";

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    //runIt(data);
})

var runIt = function(data) {
    var instructions = data.split("\n");
    var accumulator = 0;
    var done = [];
    for (var i = 0; i < instructions.length; i == i) {
        if (done.includes(i)) {
            console.log("breaking");
            break;
        }
        
        //console.log("Step: " + i);
        var arg = instructions[i].split(" ")[0];
        var val = instructions[i].split(" ")[1];
        if (arg == "nop") {
            done.push(i);
            i++;
        }

        if (arg == "acc") {
            done.push(i);
            accumulator = accumulator + parseInt(val);
            i++
        }

        if (arg == "jmp") {
            done.push(i);
            i = i + parseInt(val);
        }
        //console.log(done);
    }
    console.log(accumulator);

}

runIt(demo);