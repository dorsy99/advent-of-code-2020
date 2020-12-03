var fs = require('fs');
var filename = "./day3input.txt";

fs.readFile(filename, 'utf8', function(err, data){
    if (err) throw err;
    var coord = ["1,1", "3,1", "5,1", "7,1", "1,2"];
    var answers = []
    for (step in coord) {
        answers.push(runIt(data.split("\r\n"), coord[step]));
    }
    console.log(answers);
    runIt(data.split("\r\n"));
})

var runIt = function(data, step) {
    var prevAcross = 0;
    var across = step.split(",")[0];
    var down = step.split(",")[1];
    var treesFound = 0;

    
    for (var i = 0; i < data.length; i + down) {
        var thisStep = prevAcross % data[i].length;    
        if (i == 0) {
            prevAcross = prevAcross + across;
            //console.log(item[0]);
        } else {
            prevX = prevX + across;
            if (data[i][thisStep] == "#") {
                treesFound++;
            }
            //console.log(item[thisX]);
        }
    }

    return treesFound;
    
    /* data.forEach(function(item, y){
        var thisX = 
        
        
        
        if (down == 1) {

        }
        
        //console.log(item + " + " + i);
        
    })
    console.log(treesFound);
    */
}