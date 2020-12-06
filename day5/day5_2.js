var demo = ["BFFFBBFRRR", "FFFBBBFRRR", "BBFFBBFRLL"];

var fs = require('fs');
var filename = "./day5input.txt";

fs.readFile(filename, 'utf8', function(err, data){
    if (err) throw err;
    runIt(data.split("\r\n"));
})

function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

var runIt = function(data) {
    var highSeatID = 0;
    var seatIDs = [];
    var allSeats = [];
    for (var i = 0; i <= 1000; i++) {
        allSeats.push(i);
    }
    data.forEach(function(bin, i){
        var row = [];
        for (var i = 0; i <= 127; i++) {
            row.push(i);
        }
        var seat = [0, 1, 2, 3, 4, 5, 6, 7];
        bin.split("").forEach(function(l){
            if (l == "F") {
                row = row.slice(0,row.length/2);
            } else if (l == "B") {
                row = row.slice(row.length/2,row.length);
            } else if (l == "L") {
                seat = seat.slice(0,seat.length/2);
            } else if (l == "R") {
                seat = seat.slice(seat.length/2,seat.length);
            }
        });
        var seatId = row[0] * 8 + seat[0];
        seatIDs.push(seatId);
        /*if (seatId > highSeatID) {
            highSeatID = seatId;
        }*/
        

        //console.log("ROW: " + row + " SEAT: " + seat + " SEATID: " + seatId);
    });
    seatIDs.sort(function(a, b) {
        return a - b;
    });


    seatIDs.forEach(function(i){
        allSeats = removeA(allSeats, i);
    })

    console.log(allSeats);
}

//runIt(demo);