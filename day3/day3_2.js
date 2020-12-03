var demo = [
    "..##.......",
    "#...#...#..",
    ".#....#..#.",
    "..#.#...#.#",
    ".#...##..#.",
    "..#.##.....",
    ".#.#.#....#",
    ".#........#",
    "#.##...#...",
    "#...##....#",
    ".#..#...#.#"
];

var fs = require('fs');
var filename = "./day3input.txt";

fs.readFile(filename, 'utf8', function(err, data){
    if (err) throw err;
    var coord = ["1,1", "3,1", "5,1", "7,1", "1,2"];
    var answers = []
    //console.log(data.split("\n"));
    coord.forEach(function(step){
        //console.log("STEP");
        //answers.push(runIt(data.split("\n"),step));
    })
        
    //console.log(answers);
    runIt(data.split("\r\n"));
})

var runIt = function(data, step) {
    var prevAcross = 0;
    var across = parseInt(step.split(",")[0]);
    var down = parseInt(step.split(",")[1]);
    var treesFound = 0;

    console.log("DOWN: " + down + " AC: " + across);

    for (var i = 0; i < data.length; i = i + down) {
        //console.log(data[i]);
        var thisStep = prevAcross % 30;
        if (i == 0) {
            prevAcross = prevAcross + across;
            
        } else {
            console.log(prevAcross);
            prevAcross = prevAcross + across;
            if (data[i][thisStep] == "#") {
                treesFound++;
            }
            //console.log(data[i][thisStep]);
        }
    }

    return treesFound;
}


runIt(demo,"3,1");