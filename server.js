const express = require('express');
<<<<<<< HEAD
const app = express();
const controller = require('./controller/controller');

app.use(express.json());
app.use(express.static('public_html'));

app.get('/api/fibonacci-facts', controller.getAllFacts);
app.get('/api/fibonacci-facts/:id', controller.getFact);
app.post('/api/fibonacci-facts', controller.create);
app.put('/api/fibonacci-facts/:id', controller.update);
app.delete('/api/fibonacci-facts/:id', controller.delete);

app.listen(4000, function(){
    console.log('Server running on localhost:4000');
});
=======
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
>>>>>>> d630892f93831c3c2375bf74d1f44d1f2ba0fa7b
