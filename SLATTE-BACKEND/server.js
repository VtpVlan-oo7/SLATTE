var express=require('express');
var morgan=require('morgan');
var bcrypt = require('bcrypt-nodejs')
var bodyparser=require('body-parser');
var mongoose = require('mongoose');
var app = express();
mongoose.connect('mongodb://localhost:27017/test');
mongoose.Promise =global.Promise ;
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use(morgan('dev'));

app.use('/v1/api',require('./route/userRoute'));


app.listen(9999,function(){

console.log("port is 9999");



})
