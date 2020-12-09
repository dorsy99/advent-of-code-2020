var fs = require('fs');
var filename = "./day4input.txt";

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    doIt(data);
    //console.log(data.split("\r\n"));
})

var demo = `eyr:1972 cid:100
hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926

iyr:2019
hcl:#602927 eyr:1967 hgt:170cm
ecl:grn pid:012533040 byr:1946

hcl:dab227 iyr:2012
ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277

hgt:59cm ecl:zzz
eyr:2038 hcl:74454a iyr:2023
pid:3556412378 byr:2007`;

var doIt = function(data) {
    var passports = data.replace(/\r\n\r\n/g,"|").replace(/\r\n/g," ").split("|");
    var valid = 0
    //console.log(passports);

    passports.forEach(function(item){
        var thisPp = {};
        item.split(" ").forEach(function(data){
            thisPp[data.split(":")[0]] = data.split(":")[1];
        });
        //console.log(thisPp);

        if (item.split(':').length-1 == 8) {
            if (checkValid(thisPp)) {
                valid++;
            }
        } else if ((item.split(':').length-1 == 7) && (item.indexOf("cid") == -1)) {
            if (checkValid(thisPp)) {
                valid++;
            }
        }
    });
    console.log(valid);
}

var checkValid = function(obj) {

    if (Object.keys)

    //byr (Birth Year) - four digits; at least 1920 and at most 2002.
    if (obj.byr.length != 4) {
        return false;
    }
    if (parseInt(obj.byr) < 1920) {
        return false;
    }
    if (parseInt(obj.byr) > 2002) {
        return false;
    }
    //iyr (Issue Year) - four digits; at least 2010 and at most 2020.
    if (obj.iyr.length != 4) {
        return false;
    }
    if (parseInt(obj.iyr) < 2010) {
        return false;
    }
    if (parseInt(obj.iyr) > 2020) {
        return false;
    }
    if (isNaN(obj.byr)) {
        return false;
    }
    //eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
     if (obj.eyr.length != 4) {
        return false;
    }
    if (parseInt(obj.eyr) < 2020) {
        return false;
    }
    if (parseInt(obj.eyr) > 2030) {
        return false;
    }
    //hgt (Height) - a number followed by either cm or in:
    if (!/\d{2,3}cm|\d{2,3}in/gm.test(obj.hgt)) {
        return false;
    }

    //If cm, the number must be at least 150 and at most 193.
    if (obj.hgt.substr(obj.hgt.length-2) == "cm") {
        if (parseInt(obj.hgt.substr(0,obj.hgt.length-3) < 150)) {
            return false
        } else if (parseInt(obj.hgt.substr(0,obj.hgt.length-3)) > 193) {
            return false;
        }
    }
    
    //If in, the number must be at least 59 and at most 76.
    if (obj.hgt.substr(obj.hgt.length-2) == "in") {
        if (parseInt(obj.hgt.substr(0,obj.hgt.length-3) < 59)) {
            return false
        } else if (parseInt(obj.hgt.substr(0,obj.hgt.length-3)) > 76) {
            return false;
        }
    }

    //hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
    if (!/#[a-fA-F0-9]{6}/gm.test(obj.hcl)) {
        return false
    }

    //ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
    if (["amb","blu","brn","gry","grn","hzl","oth"].indexOf(obj.ecl) == -1) {
        return false;
    }
    
    //pid (Passport ID) - a nine-digit number, including leading zeroes.
    if (obj.pid.length != 9) {
        return false;
    }
    if (!/\d{9}/gm.test(obj.pid)) {
        return false;
    } 
    //cid (Country ID) - ignored, missing or not.
    //console.log("valid: " + JSON.stringify(obj) + "\nLENGTH: " + Object.keys(obj).length);
    //console.log("ECL: " + obj.ecl);
    return true;
}


/* console.log(checkValid({
    ecl: '#ae12d3',
    hgt: '74cm',
    cid: '239',
    hcl: 'z',
    pid: '345439730',
    iyr: '1924',
    byr: '2000',
    eyr: '2030'
  }))
 */

//doIt(demo);