//Adam Eliyahu Haymov 203520259
//Eliel Yeshayahu 208574160
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");

//add all routers
const aboutRouter = require('./routes/about');
const addcostRouter = require('./routes/addcost');
const reportRouter = require('./routes/report');

//try to open the server on the port
async function tryStartServer(){

  console.log("tryStartServer");

  const app = express();

  // connecting to the atlas mongo server db
  console.log("tryStartServer - mongo atlas");
  try {
    await mongoose
      .connect(`mongodb+srv://adam:aa12345678@cluster0.w4khvwv.mongodb.net/?retryWrites=true&w=majority`, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })
      .then(() => console.log("mongo db connected"))
      .then(() => {
        app.listen(5000, () =>
          console.log("tryStartServer - mongo atlas started")
        );
      });

      //app.listen(5000, ()=> console.log("started on 5000"))
  } catch (err) {
    console.log("failed to connect");
    console.log(err);
  }

  // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//add the routers
app.use('/about', aboutRouter);
app.use('/addcost', addcostRouter);
app.use('/report', reportRouter);
}

//run the start of the server
tryStartServer();


//module.exports = app;
