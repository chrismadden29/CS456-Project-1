let lstUsers = []; //he has a different list on moodle this is all u can do bro


const express = require("express");
const morgan = require("morgan");

const app = express();//creates new server that doesnt do anything yet
app.use(morgan('dev')); //logging 

let hostname = "localhost"; //Local host, running on my computer
let port = 4000;//port number, doesn't really matter as long as its between 1024 and 65535, and not used by another program

app.use(express.static('public_html'));

app.get("/users", function(req, res){
    res.status(200); //status 200 means ok
    res.send(lstUsers); //Use send instead of write
    res.end(); //optional 
});

app.get("/user/:uid", function(req,res){
    let uid = parseInt (req.params.uid); //get the uid from the url

    let user = null;
    for(let i = 0; i < lstUsers.length; i++){
        if(lstUsers[i]._id === uid){
            user = lstUsers[i];
        }
    }

    res.status(200); //status 200 means ok
    res.send(user); //send the user back to the client
    res.end(); //optional
}); //this will always return a string unless you use parseInt to convert it to a number

const server = app.listen(port, hostname, function(){
    console.log(`Server running on ${hostname}:${port}`);
});