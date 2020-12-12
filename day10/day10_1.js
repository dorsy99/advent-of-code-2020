var demo =
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
    runIt(data);
    //console.log(data.split("\r\n"));
})

var runIt = function(data) {
    var input = data.split("\r\n");
    var sorted = input.sort(function(a,b){
        return a-b;
    });
    var answer = {
        "one": 0,
        "two": 0,
        "three": 0
    };
    var curNum = 0;

    for (var i = 0; i < sorted.length; i++) {
        //answer[curNum-parseInt(sorted[i])]++;
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
    }
    console.log(answer.one * (answer.three+1));
}

//runIt(demo);