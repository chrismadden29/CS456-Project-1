const fs = require("fs"); //File system

//Code 1
console.log("initializing sync.js");

//IO
let content = fs.readFileSync("node.txt", function(err, content){
    if(err) return console.error(err);

    //Code 2 - IO Result
    console.log(content.toString());
});

//Code 3
console.log("Finished!");