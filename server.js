const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('public_html'));

app.get('/api/fibonacci-facts', function(req, res) {
    fs.readFile('fibonacci.json', 'utf8', function(err, data) {  // async callback 
        if (err) {
            res.status(404).send('File not Found');  
            return;
        }
        const jsonData = JSON.parse(data);
        res.status(200).json(jsonData.fibonacciFacts);  
    });
});

app.listen(4000, function() {  
    console.log('Server running on localhost:4000');
});
