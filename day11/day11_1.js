var demo = 
`L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`

var fs = require('fs');
var filename = "day11input.txt";

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    model(data);
    //getFixes(data);
})

var countOccupiedAdjacent = function(x, y, data) {
    //console.log(getStatus(x,y,data));
    var output = {
        "occupied": 0,
        "empty": 0,
        "floor": 0
    }

    if (getStatus(x,y-1,data) == "#") {
        output.occupied++;
    } else if (getStatus(x,y-1,data) == "L") {
        output.empty++;
    } else if (getStatus(x,y-1,data) == ".") {
        output.floor++;
    }
    if (getStatus(x+1,y,data) == "#") {
        output.occupied++;
    } else if (getStatus(x+1,y,data) == "L") {
        output.empty++;
    } else if (getStatus(x+1,y,data) == ".") {
        output.floor++;
    }
    if (getStatus(x+1,y-1,data) == "#") {
        output.occupied++;
    } else if (getStatus(x+1,y-1,data) == "L") {
        output.empty++;
    } else if (getStatus(x+1,y-1,data) == ".") {
        output.floor++;
    }
    if (getStatus(x+1,y+1,data) == "#") {
        output.occupied++;
    } else if (getStatus(x+1,y+1,data) == "L") {
        output.empty++;
    } else if (getStatus(x+1,y+1,data) == ".") {
        output.floor++;
    }
    if (getStatus(x,y+1,data) == "#") {
        output.occupied++;
    } else if (getStatus(x,y+1,data) == "L") {
        output.empty++;
    } else if (getStatus(x,y+1,data) == ".") {
        output.floor++;
    }
    if (getStatus(x-1,y+1,data) == "#") {
        output.occupied++;
    } else if (getStatus(x-1,y+1,data) == "L") {
        output.empty++;
    } else if (getStatus(x-1,y+1,data) == ".") {
        output.floor++;
    }
    if (getStatus(x-1,y,data) == "#") {
        output.occupied++;
    } else if (getStatus(x-1,y,data) == "L") {
        output.empty++;
    } else if (getStatus(x-1,y,data) == ".") {
        output.floor++;
    }
    if (getStatus(x-1,y-1,data) == "#") {
        output.occupied++;
    } else if (getStatus(x-1,y-1,data) == "L") {
        output.empty++;
    } else if (getStatus(x-1,y-1,data) == ".") {
        output.floor++;
    }
    
    return output;

}

var getStatus = function(x, y, data) {
    //console.log("X: " + x);
    //console.log("Y: " + y);
    //console.log("D.L: " + data.length);
    //console.log("D[x].L: " + data[x].length);
   
    /* if (y >= data.length || x < 0) {
        return "OOB";
    }
    if (x >= data[y].length || y < 0) {
        return "OOB";
    } */
    if (x < 0 || y < 0) {
        return "OOB";
    }

    if (y >= data.length) {
        return "OOB";
    }

    if (x >= data[y].length) {
        return "OOB";
    }

    var position = data[y][x];
    /* try {
        
    } catch(err) {
        console.log("X: " + x);
        console.log("Y: " + y);
        console.log("D.L: " + data.length);
        console.log("D[x].L: " + data[x].length);
        throw err;
    } */
    

    if (position == "L") {
        return "L";
    } else if (position == ".") {
        return ".";
    } else if (position == "#") {
        return "#"
    } else {
        return false;
    }
}

var mutateCell = function(x, y, data) {
    var check = countOccupiedAdjacent(x, y, data);
    var status = getStatus(x, y, data);

    if (status == "L" && check.occupied == 0) {
        return "#";
    } 
    if (status == "#" && check.occupied >= 4) {
        return "L";
    }
    return status;
}

var model = function(data, steps) {
    var input = data.split("\n");
    //console.log(input);
    var maxx = input[0].length;
    var maxy = input.length;
    var boards = [];

    
    console.log("playing board is " + maxx + " x " + maxy);

    for (var i = 0; i == i; i++) {
        console.log("doing step " + i);
        boards.push([]);
        var playingBoard;
        if (i == 0) {
            playingBoard = [...input];
        } else {
            playingBoard = [...boards[i-1]];
        }
        //console.log(playingBoard);
        playingBoard.forEach(function(row, y) {
            boards[i].push([]);
            var newRow = "";
            row.split("").forEach(function(col, x){
                newRow = newRow + mutateCell(x,y,playingBoard);
                if (x == row.split("").length-1) {
                    boards[i][y] = newRow;
                }
            })
        })
        if (boards.length > 1) {
            if (boards[i].toString() == boards[i-1].toString()) {
                console.log("STABILIZED AFTER : " + i + " STEPS");
                console.log("Total seats occupied: ");
                console.log(boards[i].toString().replace(/[^#]/g, "").length)
                break;
            }
        }
        


    }


    /*
    input.forEach(function(row, y) {
        //console.log(row);
        row.split("").forEach(function(col, x){
            //countOccupied(x,y,input);
        })
    })
    */
    //console.log(countOccupiedAdjacent(0,0,input));
    //console.log(boards);
}

//model(demo, 3);

//model(actualData, 3);