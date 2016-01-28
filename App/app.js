/**
 * Created by lyning on 16/1/28.
 */

var express = require('express');
var app = express();

app.use(require('connect-livereload')({
    port: 35729
}));

app.get('/', function(req, res){
    res.send('hello');
});

app.listen(4869, function(){
    console.log('Running...');
});