var demo = 
`F10
N3
F7
R90
F11`;


var fs = require('fs');
var filename = "day12input.txt";
fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    runIt(data);
    //getFixes(data);
})

var runIt = function(data){
    input = data.split("\n");
    console.log(input);

    var distance = {
        "N": 0,
        "E": 0,
        "S": 0,
        "W": 0
    }

    var facing = "E";
    var angle = 90;

    input.forEach(function(step){
        var dir = step[0];
        var int = parseInt(step.slice(1,step.length));
        if (dir == "N" || dir == "S" || dir == "E" || dir == "W") {
            distance[dir] += int;
        }
        if (dir == "F") {
            distance[facing] += int;
        }
        if (dir == "L") {
            angle = angle - int;
        }
        if (dir == "R") {
            angle = angle + int;
        }
        angle = Math.abs(angle%360);

        switch(angle) {
            case 0:
                facing = "N";
                break;
            case 90:
                facing = "E";
                break;
            case 180:
                facing = "S";
                break;
            case 270:
                facing = "W";
                break;
        }
        //if (dir == )
    })
    console.log(distance);
    console.log((distance.E - distance.W) + (distance.N - distance.S));
}

//runIt(demo);