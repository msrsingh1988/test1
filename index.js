var express= require('express')
var app= express()
var bodyParser = require('body-parser')
var router= require('./api/routes/product')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/products',router)

app.listen(8080)