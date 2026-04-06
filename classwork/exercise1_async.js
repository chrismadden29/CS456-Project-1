const http = require("http");

const server = http.createServer(function(request,response){
    FileSystem.readFile("node.txt",function(err,content){
        if(err){
            console.log("Error reading file.");
        } else {
            response.writeHead(200,{"content-type":"text/html"});
            response.write(content);
            response.end();
        }
    });
});

server.listen(4000,"localhost");

console.log("Server running on 4000");