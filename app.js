const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000; //Heroku conection

app.listen(port,() => console.log('SERVIDOR FUNCIONANDO AL 100'));

app.use (express.static(path.join(__dirname, './public')));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname + '/views/home.html'));
});

app.get('/register', (req,res)=>{
    res.sendFile(path.join(__dirname,'/views/register.html'))
});

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname,'/views/login.html'))
})