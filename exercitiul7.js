const students =  [{
    "id": 1,
    "name": "Tinela",
    "car": "Honda"
}, {
    "id": 2,
    "name": "Gescu",
    "car": "Lada"
}] 


const express = require('express');
const app = express();

app.get('/', function(req, res) {
        res.send("Hello World");
    });
    app.get('/api/students', function(req, res) {
        res.send(students);
    });
    app.get('/api/students/:id', function(req, res) {
        res.send(students[req.params.id]);
    });

app.post('/api/students', (req, res) => {
    var name = req.param('name');
     var car = req.param('car');
        const student= {
            id: students.length + 1,
            name: name,
           car: car,
   
        };
    students.push(student);
        res.send(students);
    });
    

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
