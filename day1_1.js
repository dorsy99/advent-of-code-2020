var fs = require('fs');
var filename = "day1input.txt";

fs.readFile(filename, 'utf8', function(err, data){
    if (err) throw err;
    var dataInt = []; 
    data.split("\r\n").forEach(function(i){
        dataInt.push(parseInt(i));
    });
    runIt(dataInt);
})

var runIt = function(data) {
    data.forEach(function(curNum){
        for (i in data) {
                if ((data[i] + curNum) == 2020) {
                    console.log("found: " + curNum + ", " + data[i]);
                    console.log(data[i] * curNum);
                }
        }
    })
}



/*
ad.forEach(function(curNum){
    for (i in ad) {
        for (j in ad) {
            if ((ad[i] + ad[j] + curNum) == 2020) {
                console.log(ad[i] * ad[j] * curNum);
            }
        }
    }
})
*/