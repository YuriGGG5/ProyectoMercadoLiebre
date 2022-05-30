const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000; //Heroku conection

app.listen(port,() => console.log('SERVIDOR FUNCIONANDO AL 100'));


app.use('/static', express.static(__dirname + '/public'));  //CARPETA PUBLICA/ESTATICA

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname,'/views/login.html'))
})
app.get('/register', (req,res)=>{
    res.sendFile(path.join(__dirname,'/views/register.html'))
})