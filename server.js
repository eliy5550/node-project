//Adam Eliyahu Haymov 203520259
//Eliel Yeshayahu 208574160
const express = require('express');
const path = require('path');

//add all routers

//try to open the server on the port
const app = express()

app.get('/' , (req , res)=>{
    res.send('hi')
});

app.listen(5000 , ()=>{
    console.log('started on 127.0.0.1:5000')
})


//module.exports = app;
