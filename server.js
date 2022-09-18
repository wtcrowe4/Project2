//Dependancies
var express = require('express');
var app = express();
require('dotenv').config();
var mongoose = require('mongoose');
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/yourDB';
var port = process.env.PORT || 3000;
var router = express.Router();


//Database
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log(`MongoDB Connected at ${mongoURI}`));


//Routes



















app.listen(port)
    .then(console.log(`Server is running on port ${port}`));