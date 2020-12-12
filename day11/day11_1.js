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

var countOccupied = function(x, y, data) {
    
    x,y-1
    x+1,y-1
    x+1,y
    x+1,y+1
    x,y+1
    x-1,y+1
    x-1,y
    x-1,y-1

}

var model = function(data, steps) {
    var input = data.split("\n");
    //console.log(input);
    var maxx = input[0].length;
    var maxy = input.length;

    
    console.log("playing board is " + maxx + " x " + maxy);

    input.forEach(function(row, i) {
        //console.log(row);
        row.split("").forEach(function(col, j){
            console.log(countOccupied(i,j,input));
        })
    })

}

model(demo);