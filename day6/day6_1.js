var demo = 
`abc

a
b
c

ab
ac

a
a
a
a

b`;

var fs = require('fs');
var filename = "./day6input.txt";

fs.readFile(filename, 'utf8', function(err, data){
    if (err) throw err;
    runIt(data.split("\r\n\r\n"));
})

var runIt = function(data) {
    //console.log(data);
    var sum = 0;
    data.forEach(function(cd) {
        var answers = cd.split("\r\n").join("");
        console.log(answers);
        var unique = answers.split("").filter(function(value, index, self){
            return self.indexOf(value) === index;
        })
        //console.log(unique + " L: " + unique.length);
        sum = sum + unique.length;
    });
    console.log(sum);
}

//runIt(demo.split("\n\n"));