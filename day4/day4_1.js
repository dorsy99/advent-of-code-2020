var fs = require('fs');
var filename = "./day4input.txt";

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    doIt(data);
})

var demo = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`;

var doIt = function(data) {
    var passports = data.replace(/\n\n/g,"|").replace(/\n/g," ").split("|");
    var valid = 0
    console.log(passports);

    passports.forEach(function(item){
        if (item.split(':').length-1 == 8) {
            valid++;
        } else if ((item.split(':').length-1 == 7) && (item.indexOf("cid") == -1)) {
            valid++;
        }
    });
    console.log(valid);
}

//doIt(demo);