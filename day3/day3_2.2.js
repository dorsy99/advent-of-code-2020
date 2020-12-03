var fs = require('fs');
var filename = "./day3input.txt";

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    runIt(data.split("\n"));
})

var runIt = function (data) {
    var prevX = 0;
    var treesFound = 0;
    data.forEach(function (item, y) {
        if (y % 2 == 0) {
            var thisX = prevX % item.length;
            if (y == 0) {
                prevX = prevX + 1;
                //console.log(item[0]);
            } else {
                //console.log(item[thisX]);
                prevX = prevX + 1;
                if (item[thisX] == "#") {
                    treesFound++;
                }
                //console.log(item[thisX]);
            }
        }
        //console.log(item + " + " + i);

    })
    console.log(treesFound);
}