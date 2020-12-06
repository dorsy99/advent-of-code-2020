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
    var found = 0;
    data.forEach(function(cd) {
        var answers = cd.split("\r\n");
        var intersect = [];
        answers.forEach(function(person, i){

            if (i == 0) {
                intersect = person.split("");
            } else {
                intersect = intersect.filter(value => person.split("").includes(value));
            }
        })
        found = found + intersect.length;
        console.log(intersect);
        
        /*var unique = answers.split("").filter(function(value, index, self){
            return self.indexOf(value) === index;
        })*/
        
        
    });
    console.log(found);
}

//runIt(demo.split("\n\n"));