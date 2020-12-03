var fs = require('fs');
var filename = "./day3input.txt";

fs.readFile(filename, 'utf8', function(err, data){
    if (err) throw err;
    runIt(data.split("\r\n"));
})

var runIt = function(data) {
    var prevX = 0;
    var treesFound = 0;
    data.forEach(function(item, y){
        var thisX = prevX % item.length;
        if (y == 0) {
            prevX = prevX + 3;
            console.log(item[0]);
        } else {
            prevX = prevX + 3;
            if (item[thisX] == "#") {
                treesFound++;
            }
            //console.log(item[thisX]);
        }
        //console.log(item + " + " + i);
        
    })
    console.log(treesFound);
}