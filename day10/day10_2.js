var demoSm = 
`16
10
15
5
1
11
7
19
6
12
4`

var demoLg =
`28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`

var fs = require('fs');
var filename = "./day10input.txt";

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    //runIt(data);
})

var runIt = function(data) {
    var input = data.split("\n");
    var inputSorted = input.sort(function(a,b){
        return a-b;
    });
    var sorted = []
    
    inputSorted.forEach(function(i){
        sorted.push(parseInt(i));
    })

    var foundOptions = 0;

    if (sorted.includes(1)) {
        foundOptions++;
    }
    if (sorted.includes(2)) {
        foundOptions++;
    }
    if (sorted.includes(3)) {
        foundOptions++;
    }

    for (var i = 0; i < sorted.length; i++) {
        //answer[curNum-parseInt(sorted[i])]++;
        
        var connections = 0;
        console.log(sorted[i]);

        if (sorted.includes(sorted[i]+1)) {
            connections++
        }
        if (sorted.includes(sorted[i]+3)) {
            connections++
        }
        
        console.log(connections);
        if (connections != 0) {
            foundOptions = foundOptions * connections;
        }
        
/*
        var thisNum = parseInt(sorted[i]);
        if (thisNum - curNum == 1) {
            answer.one++;
        } 
        if (thisNum - curNum == 2) {
            answer.two++;
        } 
        if (thisNum - curNum == 3) {
            answer.three++;
        } 
        curNum = thisNum;
        */
    }
    console.log(foundOptions)
    //console.log(answer.one * (answer.three+1));
}

runIt(demoSm);



var traverse = function(steps, i) {
}

/*
Take the current number, 

if there is a number 1 bigger than it, add 