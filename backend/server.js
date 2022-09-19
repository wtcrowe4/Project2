//Dependancies
var express = require('express');
var app = express();
require('dotenv').config();
var mongoose = require('mongoose');
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Project2';
var port = process.env.PORT || 4000;
var router = express.Router();

//Database
mongoose.connect(mongoURI, () => console.log(`MongoDB Connected at ${mongoURI}`));

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

//Routes
app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/about', (req, res) => {
    res.render('about.html');
});

app.get('/contact', (req, res) => {
    res.render('contact.html');
});

app.get('/blog', (req, res) => {
    res.render('blog.html');
});



app.listen(port, () => console.log(`Server is running on port ${port}`));