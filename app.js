require("dotenv").config();

const express = require("express");

const passport= require('./config/password-jwt-str');

const port = process.env.PORT || 5000;

const bodyParser = require('body-parser')

const db= require('./config/connect');

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(passport.initialize());

app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())


app.use('/', require('./routes/index'));


app.listen(port, function(err){
    if(err){
        console.log("error",err);
    }else{
        console.log(`app is running on port:${port}`);
    }
})