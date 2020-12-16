var demo = 
`939
7,13,x,x,59,x,31,19`;

var fs = require('fs');
var filename = "day13input.txt";
fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    runIt(data);
    //getFixes(data);
})

var runIt = function(data) {
    var offset = data.split("\n")[0];
    var timetable = data.split("\n")[1];


    var nextAvailable, waitTime;

    timetable.split(",").forEach(function(route){
        if (route != "x") {
            route = parseInt(route);
            var times = route;
            while (times < offset) {
                //console.log("incrementing times: " + times);
                times = times + route; 
                
            }
            console.log("TIMES: " + times + " OFFSET: " + offset);
            if (times > offset || nextAvailable == null) {
                if (nextAvailable) {
                    if ((times - offset) < waitTime) {
                        nextAvailable = route;
                        waitTime = times - offset;
                    }
                } else {
                    nextAvailable = route;
                    waitTime = times - offset;
                }
            }
        }
    })
    console.log(nextAvailable);
    console.log(waitTime)
}

//runIt(demo);