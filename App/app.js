/**
 * Created by lyning on 16/1/28.
 */

var express = require('express');
var app = express();

app.use(express.static('dist'));

app.get('/', function(req, res){
    res.sendFile('./static/dist/index.html');
});

app.listen(4869, function(){
    console.log('Running...');
});
