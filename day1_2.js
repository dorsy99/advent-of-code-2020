var fs = require('fs');
var filename = "day1input.txt";

fs.readFile(filename, 'utf8', function(err, data){
    if (err) throw err;
    //console.log(data.split());
    var dataInt = []; 
    data.split("\r\n").forEach(function(i){
        dataInt.push(parseInt(i));
    });
    runIt(dataInt);
})

var runIt = function(data) {
    data.forEach(function(curNum){
        for (i in data) {
            for (j in data) {
                if ((data[i] + data[j] + curNum) == 2020) {
                    console.log("found: " + curNum + ", " + data[i] + ", " + data[j]);
                    console.log(data[i] * data[j] * curNum);
                }
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