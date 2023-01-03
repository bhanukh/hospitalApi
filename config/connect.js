require('dotenv').config()
const mongoose = require('mongoose');

mongoose.connect(process.env.URI);

const db= mongoose.connection;

db.on('error', console.error.bind(console, "db not connected"));

db.once('open', function(){
    console.log("connected successfuly");
})