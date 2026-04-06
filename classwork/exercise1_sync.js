const http = require("http");

const server = http.createServer(function(request,response){
    response.writeHead(200,{"content-type":"text/html"});

    response.write("<html><body>");
    response.write("<h1> Exercise 1 - File Sync </h1>");

    let content = FileSystem.readFileSync("./public_html/lecture10.html");

    response.write(content);

    response.end();
});

server.listen(4000,"localhost");

console.log("Server running on 4000");