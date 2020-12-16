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
    input = data.split("\r\n");
    //console.log(input);

    var distance = {
        "N": 0,
        "E": 0,
        "S": 0,
        "W": 0
    }

    var turns = {
        "N": {
            "0": "N",
            "90": "E",
            "180": "S",
            "270": "W",
            "-90": "W",
            "-180": "S",
            "-270": "E"
        },
        "E": {
            "0": "E",
            "90": "S",
            "180": "W",
            "270": "N",
            "-90": "N",
            "-180": "W",
            "-270": "S"
        }, 
        "S": {
            "0": "S",
            "90": "W",
            "180": "N",
            "270": "E",
            "-90": "E",
            "-180": "N",
            "-270": "W"
        }, 
        "W": {
            "0": "W",
            "90": "N",
            "180": "E",
            "270": "S",
            "-90": "S",
            "-180": "E",
            "-270": "N"
        }
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
            //angle = angle - int;
            console.log("CURRENT ANGLE: " + facing);
            console.log("DIR: " + dir + " INT: " + int);
            console.log("TURNING: " + turns[facing][-Math.abs(int.toString())]);
            facing = turns[facing][-Math.abs(int.toString())];
        }
        if (dir == "R") {
            //angle = angle + int;
            console.log("CURRENT ANGLE: " + facing);
            console.log("DIR: " + dir + " INT: " + int);
            console.log("TURNING: " + turns[facing][int.toString()]);
            facing = turns[facing][int.toString()];
        }
        
        /*angle = Math.abs(angle%360);

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
        */
        //if (dir == )
    })
    console.log(distance);
    console.log((distance.E - distance.W) + (distance.N - distance.S));
}

//runIt(demo);