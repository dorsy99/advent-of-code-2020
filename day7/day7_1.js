var demo = 
`light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;

class bag {
    constructor(colour, contents) {
        this.colour = colour;
        this.contents = contents;
    }
    
}

var runIt = function(data) {
    var bags = [];
    data.split("\n").forEach(function(b){
        var colour = b.split(" bags contain ")[0];
        var contents = b.split(" bags contain ")[1].split(", ");
        bags.push(new bag(colour, contents));
        //console.log("COLOUR: " + colour + "\nCONTENTS: " + contents);
        
    });
    console.log(bags);
}

runIt(demo);